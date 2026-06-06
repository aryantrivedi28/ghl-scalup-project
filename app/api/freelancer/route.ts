import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields (matching the updated UI fields)
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const country = formData.get('country') as string;
    const developerType = formData.get('developerType') as string; // NEW FIELD
    const experienceLevel = formData.get('experienceLevel') as string;
    
    // Expertise fields
    const expertiseArea = formData.get('expertiseArea') as string;
    const customExpertise = formData.get('customExpertise') as string;
    const lookingFor = formData.get('lookingFor') as string;
    const rate = formData.get('rate') as string;
    const portfolioLink = formData.get('portfolioLink') as string;
    const specialisations = formData.get('specialisations') as string;
    const availability = formData.get('availability') as string;
    const extraInfo = formData.get('extraInfo') as string;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !country || !developerType) {
      return NextResponse.json(
        { success: false, message: 'Missing required personal information fields' },
        { status: 400 }
      );
    }

    if (!experienceLevel || !lookingFor || !rate || !availability) {
      return NextResponse.json(
        { success: false, message: 'Missing required expertise or rate fields' },
        { status: 400 }
      );
    }

    // Handle expertise area - check if custom expertise is provided
    let finalExpertiseArea = expertiseArea;
    let customExpertiseValue = null;
    
    if (customExpertise && customExpertise.trim() !== '') {
      // User selected "Other" and provided custom text
      finalExpertiseArea = `Other: ${customExpertise}`;
      customExpertiseValue = customExpertise;
    } else if (!expertiseArea || expertiseArea === '') {
      return NextResponse.json(
        { success: false, message: 'Expertise area is required' },
        { status: 400 }
      );
    }

    // Validate expertise based on developer type
    const validGHLOptions = [
      'GoHighLevel CRM Setup',
      'Sales Funnel Development',
      'Workflow Automation',
      'Lead Generation System',
      'AI Chatbot Automation',
      'Website Development',
      'Landing Page Design',
      'Appointment Booking System',
      'Email & SMS Automation',
      'Pipeline Management',
      'SaaS Snapshot Setup',
      'White Label SaaS Setup',
      'Facebook Ads Integration',
      'Google Ads Integration',
      'Reputation Management',
      'Calendar & Scheduling Setup',
      'Custom API Integrations',
      'SEO & Local SEO',
      'Website Speed Optimization',
      'Not Sure Yet / Need Consultation'
    ];

    const validMarketingOptions = [
      'Meta',
      'Google',
      'LinkedIn',
      'YouTube',
      'X (Twitter)'
    ];

    // Only validate if not custom expertise
    if (!customExpertiseValue) {
      if (developerType === 'GHL Expert' && !validGHLOptions.includes(expertiseArea)) {
        return NextResponse.json(
          { success: false, message: 'Invalid expertise area for GHL Expert' },
          { status: 400 }
        );
      }
      
      if (developerType === 'Marketing Expert' && !validMarketingOptions.includes(expertiseArea)) {
        return NextResponse.json(
          { success: false, message: 'Invalid expertise area for Marketing Expert' },
          { status: 400 }
        );
      }
    }

    // Handle file uploads
    let resumeUrl = null;
    let portfolioUrl = null;

    const resumeFile = formData.get('resume') as File;
    const portfolioFile = formData.get('portfolio') as File;

    // Upload resume to Supabase Storage
    if (resumeFile && resumeFile.size > 0) {
      const fileExt = resumeFile.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `resumes/${fileName}`;

      const { error: uploadError } = await supabaseServer.storage
        .from('ghl_freelancer_documents')
        .upload(filePath, resumeFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Resume upload error:', uploadError);
        throw new Error(`Resume upload failed: ${uploadError.message}`);
      }

      const { data: urlData } = supabaseServer.storage
        .from('ghl_freelancer_documents')
        .getPublicUrl(filePath);

      resumeUrl = urlData.publicUrl;
    } else {
      return NextResponse.json(
        { success: false, message: 'Resume/CV is required' },
        { status: 400 }
      );
    }

    // Upload portfolio to Supabase Storage (optional)
    if (portfolioFile && portfolioFile.size > 0) {
      const fileExt = portfolioFile.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `portfolios/${fileName}`;

      const { error: uploadError } = await supabaseServer.storage
        .from('ghl_freelancer_documents')
        .upload(filePath, portfolioFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Portfolio upload error:', uploadError);
        // Don't throw error for optional portfolio upload
        console.warn('Portfolio upload failed but continuing');
      } else {
        const { data: urlData } = supabaseServer.storage
          .from('ghl_freelancer_documents')
          .getPublicUrl(filePath);
        portfolioUrl = urlData.publicUrl;
      }
    }

    // Insert into database
    const { data, error } = await supabaseServer
      .from('ghl_freelancer_onboarding')
      .insert({
        // Personal Information
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        country,
        developer_type: developerType, // NEW FIELD
        experience_level: experienceLevel,
        
        // Expertise & Skills
        expertise_area: finalExpertiseArea,
        custom_expertise: customExpertiseValue,
        looking_for: lookingFor,
        specialisations: specialisations || null,
        
        // Rate & Documents
        rate_expectation: rate,
        availability: availability,
        resume_url: resumeUrl,
        portfolio_url: portfolioUrl,
        portfolio_link: portfolioLink || null,
        extra_info: extraInfo || null,
        
        // Status tracking
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      console.error('Database insert error:', error);
      throw new Error(`Database insert failed: ${error.message}`);
    }


    // Send webhook to GHL (optional, handle gracefully if fails)
    try {
      const webhookUrl = process.env.GHL_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            // Personal Info
            firstName,
            lastName,
            email,
            phone,
            country,
            developerType, // NEW FIELD
            experienceLevel,
            
            // Expertise
            expertiseArea: finalExpertiseArea,
            customExpertise: customExpertiseValue,
            lookingFor,
            specialisations,
            
            // Rate & Docs
            rate,
            availability,
            portfolioLink,
            resumeUrl,
            portfolioUrl,
            extraInfo,
            
            source: "Freelancer Onboarding",
            submittedAt: new Date().toISOString()
          })
        });
      }
    } catch (webhookError) {
      // Don't fail the main request if webhook fails
      console.error('Webhook notification failed:', webhookError);
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully!',
      data: {
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        developerType: data.developer_type,
        expertiseArea: finalExpertiseArea,
        status: data.status
      }
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to submit application' 
      },
      { status: 500 }
    );
  }
}