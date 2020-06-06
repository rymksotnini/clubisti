<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    View::addExtension('html', 'php');
    return View::make('index');
//    return view('welcome');
});

//Route::get('/', function () {
//    return view('welcome');
//});


Auth::routes();

Route::get('send-mail', function () {

    $details = [
        'title' => 'Mail from ItSolutionStuff.com',
        'body' => 'This is for testing email using smtp'
    ];

    \Mail::to('haouari.wejdene1@gmail.com')->send(new \App\Mail\MailService($details));

    dd("Email is Sent.");
});





















