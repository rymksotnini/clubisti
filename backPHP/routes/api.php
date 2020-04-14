<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*Route::middleware('api')->get('users', function (Request $request) {
    return $request->user();
});*/
Route::group(['middleware' => ['jwt.verify']], function() {
    /************************************************ Accounts API ************************************************/
    Route::get('/accounts', 'AccountController@index');
    Route::get('/accounts/{id}', 'AccountController@show');
    Route::post('/accounts', 'AccountController@store');
    Route::put('/accounts/{id}', 'AccountController@update');
    Route::delete('/accounts/{id}', 'AccountController@delete');

    /************************************************ Addresses API ************************************************/
    Route::get('/addresses', 'AddressController@index');
    Route::get('/addresses/{id}', 'AddressController@show');
    Route::post('/addresses', 'AddressController@store');
    Route::put('/addresses/{id}', 'AddressController@update');
    Route::delete('/addresses/{id}', 'AddressController@delete');

    /************************************************ Badges API ************************************************/
    Route::get('/badges', 'BadgeController@index');
    Route::get('/badges/{id}', 'BadgeController@show');
    Route::post('/badges', 'BadgeController@store');
    Route::put('/badges/{id}', 'BadgeController@update');
    Route::delete('/badges/{id}', 'BadgeController@delete');

    /************************************************ Categories API ************************************************/
//    Route::get('/categories', 'CategoryController@index');
//    Route::get('/categories/{id}', 'CategoryController@show');
//    Route::post('/categories', 'CategoryController@store');
//    Route::put('/categories/{id}', 'CategoryController@update');
//    Route::delete('/categories/{id}', 'CategoryController@delete');

    /************************************************ Countries API ************************************************/
    Route::get('/countries', 'CountryController@index');
    Route::get('/countries/{id}', 'CountryController@show');
    Route::post('/countries', 'CountryController@store');
    Route::put('/countries/{id}', 'CountryController@update');
    Route::delete('/countries/{id}', 'CountryController@delete');

    /************************************************ Organisations API ************************************************/
    Route::get('/organisations', 'OrganisationController@index');
    Route::get('/organisations/{id}', 'OrganisationController@show');
    Route::post('/organisations', 'OrganisationController@store');
    Route::put('/organisations/{id}', 'OrganisationController@update');
    Route::delete('/organisations/{id}', 'OrganisationController@delete');

    /************************************************ Products API ************************************************/
    Route::get('/products', 'ProductController@index');
    Route::get('/products/{id}', 'ProductController@show');
    Route::post('/products', 'ProductController@store');
    Route::put('/products/{id}', 'ProductController@update');
    Route::delete('/products/{id}', 'ProductController@delete');

    /************************************************ Profiles API ************************************************/
    Route::get('/profiles', 'ProfileController@index');
    Route::get('/profiles/{id}', 'ProfileController@show');
    Route::post('/profiles', 'ProfileController@store');
    Route::put('/profiles/{id}', 'ProfileController@update');
    Route::delete('/profiles/{id}', 'ProfileController@delete');

    /************************************************ Projectes API ************************************************/
//    Route::get('/projects', 'ProjectController@index');
//    Route::get('/projects/{id}', 'ProjectController@show');
//    Route::post('/projects', 'ProjectController@store');
//    Route::put('/projects/{id}', 'ProjectController@update');
//    Route::delete('/projects/{id}', 'ProjectController@delete');

    /************************************************ Roles API ************************************************/
    Route::get('/roles', 'RoleController@index');
    Route::get('/roles/{id}', 'RoleController@show');
    Route::post('/roles', 'RoleController@store');
    Route::put('/roles/{id}', 'RoleController@update');
    Route::delete('/roles/{id}', 'RoleController@delete');

    /************************************************ Users API ************************************************/
    Route::get('/users', 'UserController@index');
    Route::get('/users/{id}', 'UserController@show');
    Route::post('/users', 'UserController@store');
    Route::put('/users/{id}', 'UserController@update');
    Route::delete('/users/{id}', 'UserController@delete');
});


/************************************************ Authentication API ************************************************/
Route::post('/register', 'AuthenticationController@register');
Route::post('/login', 'AuthenticationController@login');
Route::post('/logout', 'AuthenticationController@logout');
Route::post('/fblogin', array('uses' => 'SocialAuthFacebookController@login'));

/************************************************ Authentication FACEBOOK ************************************************/

Route::get('/categories', 'CategoryController@index');
Route::get('/categories/{id}', 'CategoryController@show');
Route::post('/categories', 'CategoryController@store');
Route::put('/categories/{id}', 'CategoryController@update');
Route::delete('/categories/{id}', 'CategoryController@delete');

Route::get('/projects', 'ProjectController@index');
Route::get('/projects/{id}', 'ProjectController@show');
Route::post('/projects', 'ProjectController@store');
Route::put('/projects/activate/{id}', 'ProjectController@activate');
Route::put('/projects/pause/{id}', 'ProjectController@pause');
Route::put('/projects/end/{id}', 'ProjectController@end');
Route::put('/projects/{id}', 'ProjectController@update');
Route::delete('/projects/{id}', 'ProjectController@delete');


Route::get('/redirect', 'SocialAuthFacebookController@redirect');
Route::get('/callback', 'SocialAuthFacebookController@callback');

