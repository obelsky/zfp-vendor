'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select, Label, FormGroup } from '@/components/ui/Input';
import { CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Jméno musí mít alespoň 2 znaky'),
  email: z.string().email('Zadejte platný e-mail'),
  role: z.enum(['makler', 'poradce', 'jine'], {
    required_error: 'Vyberte roli',
  }),
  message: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  
  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    
    try {
      // TODO: Replace with actual API call or EmailJS
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Failed to send');
      
      setStatus('success');
      reset();
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormGroup>
        <Label htmlFor="name" required>Jméno a příjmení</Label>
        <Input
          id="name"
          placeholder="Jan Novák"
          error={errors.name?.message}
          {...register('name')}
        />
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="email" required>E-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="jan.novak@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="role" required>Role</Label>
        <Select
          id="role"
          placeholder="Vyberte..."
          options={[
            { value: 'makler', label: 'Realitní makléř' },
            { value: 'poradce', label: 'Finanční poradce' },
            { value: 'jine', label: 'Jiné' },
          ]}
          error={errors.role?.message}
          {...register('role')}
        />
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="message" required>Zpráva</Label>
        <Textarea
          id="message"
          placeholder="Popište nám váš požadavek nebo dotaz..."
          error={errors.message?.message}
          {...register('message')}
        />
      </FormGroup>
      
      <Button
        type="submit"
        className="w-full"
        isLoading={status === 'loading'}
      >
        Odeslat zprávu
      </Button>
      
      {/* Status messages */}
      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-500 text-sm">
          <CheckCircle size={16} />
          <span>Zpráva byla úspěšně odeslána! Ozveme se vám do 24 hodin.</span>
        </div>
      )}
      
      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle size={16} />
          <span>Chyba při odesílání. Zkuste to prosím znovu.</span>
        </div>
      )}
    </form>
  );
}
