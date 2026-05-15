import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      message,
      name,
      phone,
      email,
      conversationId,
    } = body

    // Validation
    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Message is required',
        },
        { status: 400 }
      )
    }

    // AI System Prompt
    const systemPrompt = `
You are an AI assistant for GHL ScaleUp.

You help users with:
- Website Development
- CRM Setup
- AI Automation
- GoHighLevel Services
- WhatsApp Automation

Your goals:
- answer professionally
- qualify leads
- ask business-focused questions
- encourage consultation booking

Rules:
- Keep responses short
- Be friendly and professional
- Ask one question at a time
- Do not invent pricing
- Stay focused on business inquiries
`

    // OpenAI Request
    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      temperature: 0.7,
      max_tokens: 300,
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: `
Customer Details:
Name: ${name || 'Unknown'}
Phone: ${phone || 'Unknown'}
Email: ${email || 'Unknown'}
Conversation ID: ${conversationId || 'N/A'}

Customer Message:
${message}
          `,
        },
      ],
    })

    const aiReply =
      completion.choices?.[0]?.message?.content?.trim()

    if (!aiReply) {
      return NextResponse.json(
        {
          success: false,
          message: 'No AI response generated',
        },
        { status: 500 }
      )
    }

    // Return AI Response
    return NextResponse.json({
      success: true,
      ai_response: aiReply,
    })
  } catch (error: any) {
    console.error('OpenAI Error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
      },
      { status: 500 }
    )
  }
}