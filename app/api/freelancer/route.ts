import { NextRequest, NextResponse } from 'next/server';

// ======================================================
// SUPABASE TEMPORARILY DISABLED
// Keep these imports for future use.
// ======================================================

// import { supabaseServer } from '@/lib/supabaseServer';
// import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const country = formData.get('country') as string;
    const developerType = formData.get('developerType') as string;
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
    const toolsKnown = formData.get('toolsKnown') as string;

    // ======================================================
    // VALIDATION
    // ======================================================

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !country ||
      !developerType
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required personal information fields',
        },
        { status: 400 }
      );
    }

    if (!experienceLevel || !lookingFor || !rate || !availability) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required expertise or rate fields',
        },
        { status: 400 }
      );
    }

    // Validate Project Management specific fields
    if (developerType === 'Project Management' && !toolsKnown) {
      return NextResponse.json(
        {
          success: false,
          message: 'Tools known is required for Project Management',
        },
        { status: 400 }
      );
    }

    // ======================================================
    // EXPERTISE AREA
    // ======================================================

    let finalExpertiseArea = expertiseArea;
    let customExpertiseValue = null;

    if (customExpertise && customExpertise.trim() !== '') {
      finalExpertiseArea = `Other: ${customExpertise}`;
      customExpertiseValue = customExpertise;
    } else if (!expertiseArea || expertiseArea === '') {
      return NextResponse.json(
        {
          success: false,
          message: 'Expertise area is required',
        },
        { status: 400 }
      );
    }

    // ======================================================
    // VALID EXPERTISE OPTIONS
    // ======================================================

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
      'Not Sure Yet / Need Consultation',
    ];

    const validMarketingOptions = [
      'Meta',
      'Google',
      'LinkedIn',
      'YouTube',
      'X (Twitter)',
    ];

    const validProjectManagementOptions = [
      'Agile Project Management',
      'Scrum Master',
      'Sprint Planning',
      'Stakeholder Management',
      'Risk Management',
      'Quality Assurance',
      'Cross-functional Collaboration',
      'Resource Allocation',
      'Budget Management',
      'Timeline Tracking',
      'Gantt Charts',
      'Kanban Management',
      'Waterfall Model',
      'Hybrid Project Management',
    ];

    // ======================================================
    // EXPERTISE VALIDATION
    // ======================================================

    if (!customExpertiseValue) {
      if (
        developerType === 'GHL Expert' &&
        !validGHLOptions.includes(expertiseArea)
      ) {
        return NextResponse.json(
          {
            success: false,
            message: 'Invalid expertise area for GHL Expert',
          },
          { status: 400 }
        );
      }

      if (
        developerType === 'Marketing Expert' &&
        !validMarketingOptions.includes(expertiseArea)
      ) {
        return NextResponse.json(
          {
            success: false,
            message: 'Invalid expertise area for Marketing Expert',
          },
          { status: 400 }
        );
      }

      if (
        developerType === 'Project Management' &&
        !validProjectManagementOptions.includes(expertiseArea)
      ) {
        return NextResponse.json(
          {
            success: false,
            message: 'Invalid expertise area for Project Management',
          },
          { status: 400 }
        );
      }
    }

    // ======================================================
    // FILES
    // ======================================================

    const resumeFile = formData.get('resume') as File;
    const portfolioFile = formData.get('portfolio') as File;

    // Resume is required
    if (!resumeFile || resumeFile.size === 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Resume/CV is required',
        },
        { status: 400 }
      );
    }

    // ======================================================
    // SUPABASE STORAGE - TEMPORARILY DISABLED
    // ======================================================
    //
    // When Supabase is upgraded, uncomment this section.
    //
    // let resumeUrl = null;
    // let portfolioUrl = null;
    //
    // if (resumeFile && resumeFile.size > 0) {
    //   const fileExt = resumeFile.name.split('.').pop();
    //   const fileName = `${uuidv4()}.${fileExt}`;
    //   const filePath = `resumes/${fileName}`;
    //
    //   const { error: uploadError } = await supabaseServer.storage
    //     .from('ghl_freelancer_documents')
    //     .upload(filePath, resumeFile, {
    //       cacheControl: '3600',
    //       upsert: false,
    //     });
    //
    //   if (uploadError) {
    //     console.error('Resume upload error:', uploadError);
    //     throw new Error(`Resume upload failed: ${uploadError.message}`);
    //   }
    //
    //   const { data: urlData } = supabaseServer.storage
    //     .from('ghl_freelancer_documents')
    //     .getPublicUrl(filePath);
    //
    //   resumeUrl = urlData.publicUrl;
    // }
    //
    // if (portfolioFile && portfolioFile.size > 0) {
    //   const fileExt = portfolioFile.name.split('.').pop();
    //   const fileName = `${uuidv4()}.${fileExt}`;
    //   const filePath = `portfolios/${fileName}`;
    //
    //   const { error: uploadError } = await supabaseServer.storage
    //     .from('ghl_freelancer_documents')
    //     .upload(filePath, portfolioFile, {
    //       cacheControl: '3600',
    //       upsert: false,
    //     });
    //
    //   if (uploadError) {
    //     console.error('Portfolio upload error:', uploadError);
    //   } else {
    //     const { data: urlData } = supabaseServer.storage
    //       .from('ghl_freelancer_documents')
    //       .getPublicUrl(filePath);
    //
    //     portfolioUrl = urlData.publicUrl;
    //   }
    // }

    // ======================================================
    // TEMPORARY FILE URL VALUES
    // ======================================================

    const resumeUrl = null;
    const portfolioUrl = null;

    // ======================================================
    // SUPABASE DATABASE - TEMPORARILY DISABLED
    // ======================================================
    //
    // When Supabase is upgraded, uncomment this section.
    //
    // const { data, error } = await supabaseServer
    //   .from('ghl_freelancer_onboarding')
    //   .insert({
    //     first_name: firstName,
    //     last_name: lastName,
    //     email,
    //     phone,
    //     country,
    //     developer_type: developerType,
    //     experience_level: experienceLevel,
    //     expertise_area: finalExpertiseArea,
    //     custom_expertise: customExpertiseValue,
    //     looking_for: lookingFor,
    //     specialisations: specialisations || null,
    //     tools_known: toolsKnown || null,
    //     rate_expectation: rate,
    //     availability: availability,
    //     resume_url: resumeUrl,
    //     portfolio_url: portfolioUrl,
    //     portfolio_link: portfolioLink || null,
    //     extra_info: extraInfo || null,
    //     status: 'pending',
    //     created_at: new Date().toISOString(),
    //     updated_at: new Date().toISOString(),
    //   })
    //   .select()
    //   .single();
    //
    // if (error) {
    //   console.error('Database insert error:', error);
    //   throw new Error(`Database insert failed: ${error.message}`);
    // }

    // ======================================================
    // GOHIGHLEVEL WEBHOOK
    // ======================================================

    const webhookUrl = process.env.GHL_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('GHL_WEBHOOK_URL is not configured');

      return NextResponse.json(
        {
          success: false,
          message: 'GoHighLevel webhook is not configured',
        },
        { status: 500 }
      );
    }

    const ghlPayload = {
      // Personal Info
      firstName,
      lastName,
      email,
      phone,
      country,
      developerType,
      experienceLevel,

      // Expertise
      expertiseArea: finalExpertiseArea,
      customExpertise: customExpertiseValue,
      lookingFor,
      specialisations,
      toolsKnown: toolsKnown || null,

      // Rate
      rate,
      availability,

      // Portfolio
      portfolioLink: portfolioLink || null,

      // Documents
      resumeUrl,
      portfolioUrl,

      // Since Supabase is disabled, also send file information
      resumeFileName: resumeFile.name,
      resumeFileSize: resumeFile.size,
      resumeFileType: resumeFile.type,

      portfolioFileName:
        portfolioFile && portfolioFile.size > 0
          ? portfolioFile.name
          : null,

      // Additional information
      extraInfo,

      // Tracking
      source: 'Freelancer Onboarding',
      submittedAt: new Date().toISOString(),
    };

    console.log('Sending freelancer application to GHL');

    const ghlResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlPayload),
    });

    // ======================================================
    // CHECK GOHIGHLEVEL RESPONSE
    // ======================================================

    if (!ghlResponse.ok) {
      const responseText = await ghlResponse.text();

      console.error(
        'GHL webhook failed:',
        ghlResponse.status,
        responseText
      );

      throw new Error(
        `GoHighLevel webhook failed with status ${ghlResponse.status}`
      );
    }

    // ======================================================
    // SUCCESS
    // ======================================================

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully!',
      data: {
        firstName,
        lastName,
        email,
        developerType,
        expertiseArea: finalExpertiseArea,
        status: 'submitted',
      },
    });
  } catch (error) {
    console.error('Error submitting application:', error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Failed to submit application',
      },
      { status: 500 }
    );
  }
}