import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.enum(['makler', 'poradce', 'jine']),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid data', details: result.error.flatten() },
        { status: 400 }
      );
    }
    
    const data = result.data;
    
    // TODO: Implement actual email sending (EmailJS, Resend, etc.)
    // For now, just log and return success
    console.log('Contact form submission:', data);
    
    // TODO: Save to Supabase CRM
    // const { error } = await supabase.from('leads').insert({
    //   name: data.name,
    //   email: data.email,
    //   role: data.role,
    //   message: data.message,
    //   source: 'contact_form',
    //   status: 'new',
    // });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
