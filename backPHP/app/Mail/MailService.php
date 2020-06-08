<?php

namespace App\Mail;
use Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MailService extends Mailable
{
    use Queueable, SerializesModels;

    public $details;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Mail from clubisti')
            ->view('emails.verifyEmail');
    }

     public function sendTo($to_name, $to_email, $data, $template, $subject, $from) {

            Mail::send($template, $data, function($message) use ($to_name, $to_email, $subject, $from) {

            $message->to($to_email, $to_name)
            ->subject($subject);
              $from = env('MAIL_EMAIL');
            $message->from($from,"Clubisti");
            });

            }

    }



