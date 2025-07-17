'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { z } from 'zod';

// UI
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormProps {
  siteKey: string;
}

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  email: z.string().min(5, {
    message: 'Email must be at least 5 characters.'
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.'
  })
});

const ContactForm = ({ siteKey }: ContactFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: ''
  });
  const [captchaValid, setCaptchaValid] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Shows alert message for form submission feedback
  const toggleAlert = (message: string, type: string) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onChange = (value: string | null) => {
    if (value) {
      setCaptchaValid(true);
      // Send value to your backend for verification
    } else {
      console.log('reCAPTCHA expired or failed.');
      setCaptchaValid(false);
    }
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const { name, email, message } = data;

    // Disable form while processing submission
    setDisabled(true);

    const params = {
      from_name: name,
      message: message,
      from_email: email
    };

    if (captchaValid) {
      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'form-name': 'contact',
            ...params
          }).toString()
        }).then(() => {
          toggleAlert('Form submission was successful!', 'success');
          setDisabled(false);
        });

        recaptchaRef.current?.reset();
        form.reset();
      } catch (error) {
        console.error('Captcha validation failed', error);
        recaptchaRef.current?.setState({ value: false });
        setDisabled(false);
        toggleAlert('Please complete the reCAPTCHA.', 'danger');
        return;
      }
    } else {
      console.error('Captcha validation failed');
      toggleAlert('Please complete the reCAPTCHA.', 'danger');
      setDisabled(false);

      return;
    }
  };

  return (
    <div className='flex justify-center col'>
      <Form {...form}>
        <form
          name='contact'
          data-netlify='true'
          method='POST'
          id='contact-form'
          noValidate
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-2/3 space-y-6'>
          <input
            type='hidden'
            name='form-name'
            value='contact'
          />
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Name'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='example@example.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Your message'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={siteKey}
            onChange={onChange}
            className='mt-4'
          />

          {!captchaValid && form.formState.isSubmitted ? (
            <FormMessage>Please complete the reCAPTCHA.</FormMessage>
          ) : null}

          {alertInfo.display && (
            <div
              className={`alert alert-${alertInfo.type} alert-dismissible mt-5 text-red-500`}
              role='alert'>
              {alertInfo.message}
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='alert'
                aria-label='Close'
                onClick={() =>
                  setAlertInfo({ display: false, message: '', type: '' })
                } // Clear the alert when close button is clicked
              ></button>
            </div>
          )}

          <Button
            type='submit'
            disabled={disabled}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
