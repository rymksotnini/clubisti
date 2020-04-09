<?php

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
    return view('welcome');
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/api/redirect', array('middleware' => 'cors', 'uses' => 'SocialAuthFacebookController@redirect'));
Route::get('/api/callback', array('middleware' => 'cors', 'uses' => 'SocialAuthFacebookController@callback'));
Route::get('/redirect', array('middleware' => 'cors', 'uses' => 'SocialAuthFacebookController@redirect'));
Route::get('/callback', array('middleware' => 'cors', 'uses' => 'SocialAuthFacebookController@callback'));
