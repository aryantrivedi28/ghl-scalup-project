import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const country = formData.get('country') as string;
    const experienceLevel = formData.get('experienceLevel') as string;
    const portfolioLink = formData.get('portfolioLink') as string;
    const specialisations = formData.get('specialisations') as string;
    const availability = formData.get('availability') as string;
    const extraInfo = formData.get('extraInfo') as string;
    const caseStudiesRaw = formData.get('caseStudies') as string;
    const caseStudies = caseStudiesRaw ? JSON.parse(caseStudiesRaw) : [];

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

      const { data: uploadData, error: uploadError } = await supabaseServer.storage
        .from('ghl_freelancer_documents')  // Updated bucket name
        .upload(filePath, resumeFile);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabaseServer.storage
        .from('ghl_freelancer_documents')  // Updated bucket name
        .getPublicUrl(filePath);

      resumeUrl = urlData.publicUrl;
    }

    // Upload portfolio to Supabase Storage
    if (portfolioFile && portfolioFile.size > 0) {
      const fileExt = portfolioFile.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `portfolios/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabaseServer.storage
        .from('ghl_freelancer_documents')  // Updated bucket name
        .upload(filePath, portfolioFile);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabaseServer.storage
        .from('ghl_freelancer_documents')  // Updated bucket name
        .getPublicUrl(filePath);

      portfolioUrl = urlData.publicUrl;
    }

    // Insert into database
    const { data, error } = await supabaseServer
      .from('ghl_freelancer_onboarding')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        country,
        experience_level: experienceLevel,
        resume_url: resumeUrl,
        portfolio_url: portfolioUrl,
        portfolio_link: portfolioLink,
        specialisations,
        case_studies: caseStudies,
        availability,
        extra_info: extraInfo,
        status: 'pending'
      })
      .select()
      .single();

    if (error) throw error;

    await fetch(process.env.GHL_WEBHOOK_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        country,
        experienceLevel,
        specialisations,
        availability,
        portfolioLink,
        resumeUrl,
        portfolioUrl,
        caseStudies,
        source: "Freelancer Onboarding"
      })
    });

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully!',
      data
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 }
    );
  }
}