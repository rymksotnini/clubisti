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
Route::middleware('api')->get('users', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => ['jwt.verify']], function() {
    /************************************************ Accounts API ************************************************/
    // admin, superAdmin
    Route::get('/accounts', 'AccountController@index');
    Route::get('/accounts/{id}', 'AccountController@show');
    Route::post('/accounts', 'AccountController@store');
    Route::put('/accounts/{id}', 'AccountController@update');
    Route::put('/default/{id}', 'AccountController@setAccountAsDefault');
    Route::delete('/accounts/{id}', 'AccountController@delete');
    Route::get('/default', 'AccountController@getDefault');

    /************************************************ Addresses API ************************************************/
    // user, admin, superAdmin
    Route::get('/addresses', 'AddressController@index');
    Route::get('/addresses/{id}', 'AddressController@show');
    Route::post('/addresses', 'AddressController@store');
    Route::put('/addresses/{id}', 'AddressController@update');
    Route::delete('/addresses/{id}', 'AddressController@delete');

    /************************************************ Badges API ************************************************/
    // user, admin, superAdmin
    Route::get('/badges', 'BadgeController@index');
    Route::get('/badges/{id}', 'BadgeController@show');
    // admin, superAdmin
    Route::post('/badges', 'BadgeController@store');
    Route::put('/badges/{id}', 'BadgeController@update');

    /************************************************ Categories API ************************************************/
    // user, admin, superAdmin
    Route::get('/categories', 'CategoryController@index');
    Route::get('/categories/{id}', 'CategoryController@show');
    // admin, superAdmin
    Route::post('/categories', 'CategoryController@store');
    Route::put('/categories/{id}', 'CategoryController@update');
    Route::delete('/categories/{id}', 'CategoryController@delete');



    /************************************************ Countries API ************************************************/
    // user, admin, superAdmin
    Route::get('/countries', ['middleware' => 'auth.role:admin,user', 'uses' => 'CountryController@index']);
//    Route::get('/countries', 'CountryController@index');
    Route::get('/countries/{id}', 'CountryController@show');
    // admin, superAdmin
    Route::post('/countries', 'CountryController@store');
    Route::put('/countries/{id}', 'CountryController@update');
    Route::delete('/countries/{id}', 'CountryController@delete');

    /************************************************ Organisations API ************************************************/
    // user, admin, superAdmin
    Route::get('/organisations', 'OrganisationController@index');
    Route::get('/organisations/{id}', 'OrganisationController@show');
    // admin, superAdmin
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
    Route::get('/profiles/current/{id}', 'ProfileController@getProfile');
    Route::post('/profiles', 'ProfileController@store');
    Route::put('/profiles/balance/{id}', 'ProfileController@setBalance');
    Route::put('/profiles/{id}', 'ProfileController@update');
    Route::delete('/profiles/{id}', 'ProfileController@delete');

    /************************************************ offer API ************************************************/
    Route::get('/offers', 'OfferController@index');
    Route::get('/offers/{id}', 'OfferController@show');
    Route::post('/offers', 'OfferController@store');
    Route::put('/offers/{id}', 'OfferController@update');
    Route::delete('/offers/{id}', 'OfferController@delete');

    /************************************************ Projects API ************************************************/

    Route::post('/projects', 'ProjectController@storeWithOffer');
    Route::put('/projects/activate/{id}', 'ProjectController@activate');
    Route::put('/projects/pause/{id}', 'ProjectController@pause');
    Route::put('/projects/end/{id}', 'ProjectController@end');
    Route::put('/projects/{id}', 'ProjectController@update');
    Route::delete('/projects/{id}', 'ProjectController@delete');
    Route::post("/projects/image" , "ProjectController@downloadImage");
    Route::post("/projects/image/{id}" , "ProjectController@uploadImage");
    /************************************************ Roles API ************************************************/
    Route::get('/roles', 'RoleController@index');
    Route::get('/roles/{id}', 'RoleController@show');
    Route::post('/roles', 'RoleController@store');
    Route::put('/roles/{id}', 'RoleController@update');
    Route::delete('/roles/{id}', 'RoleController@delete');

    /************************************************ Users API ************************************************/
    Route::get('/users', 'UserController@index');
    Route::get('/users/{id}', 'UserController@show');
    Route::get('/users/profile/{id}', 'UserController@getUserWithRelationship');
    Route::post('/users', 'UserController@store');
    Route::put('/users/{id}', 'UserController@update');
    Route::put('/users/profile/{id}', 'UserController@createOrUpdate');
    Route::delete('/users/{id}', 'UserController@delete');
    Route::post('/users/makeAdmin/{id}', 'UserController@makeAdmin');

    /************************************************ Image API ************************************************/
    Route::post("/image" , "ImageController@downloadImage");
    Route::get('/image/{id}', 'ImageController@uploadImage');

    /************************************************ Complain API ************************************************/
    Route::get('/complains', 'ComplainController@index');
    Route::get('/complains/{id}', 'ComplainController@show');
    Route::get('/complains/details/{id}', 'ComplainController@showDetails');
    Route::post("/complains/image" , "ComplainController@downloadImage");
    Route::post("/complains/image/{id}" , "ComplainController@uploadImage");
    Route::put('/complains/refuse/{id}', 'ComplainController@refuse');
    Route::put('/complains/process/{id}', 'ComplainController@process');
    Route::post('/complains', 'ComplainController@store');
    Route::put('/complains/{id}', 'ComplainController@update');
    Route::delete('/complains/{id}', 'ComplainController@delete');

    /************************************************ AccountType API ************************************************/
// admin, superAdmin
    Route::get('/accountTypes', 'AccountTypeController@index');
    Route::get('/accountTypes/{id}', 'AccountTypeController@show');
    Route::post('/accountTypes', 'AccountTypeController@store');
    Route::put('/accountTypes/{id}', 'AccountTypeController@update');
    Route::delete('/accountTypes/{id}', 'AccountTypeController@delete');

    /************************************************ AccountAndAccountType API ****************************************/

    Route::post('/accounts/accountTypes/{id}', 'AccountController@createOrUpdateWithAccountType');});


  /************************************************ Transaction API ************************************************/
// user, admin, superAdmin
Route::get('/transactions', 'TransactionController@index');
Route::get('/transactions/{id}', 'TransactionController@show');
Route::get('/users/transactions/{id}', 'TransactionController@getPerUser');
Route::get('/transactions/project/{id}', 'TransactionController@getPerOffer');
Route::post('/transactions', 'TransactionController@store');
Route::post('/donate', 'TransactionController@create');
// admin, superAdmin
Route::put('/transactions/{id}', 'TransactionController@update');
Route::delete('/transactions/{id}', 'TransactionController@delete');

/************************************************ Authentication API ************************************************/
Route::post('/register', 'AuthenticationController@register');
Route::post('/login', 'AuthenticationController@login');
Route::post('/logout', 'AuthenticationController@logout');
Route::post('/fblogin', array('middleware' => 'cors','uses'=>'SocialAuthFacebookController@login'));
Route::get('/verify/{token}', 'AuthenticationController@VerifyEmail');
Route::post('/reset', 'AuthenticationController@resetPasswordEmail');
Route::post('/reset-code', 'AuthenticationController@verifyTokenReset');
/************************************************ Authentication FACEBOOK *****************************************/
Route::get('/redirect', 'SocialAuthFacebookController@redirect');
Route::get('/callback', 'SocialAuthFacebookController@callback');
Route::get('/projects', 'ProjectController@index');
Route::get('/donation', 'TransactionController@indexGroupeBy');
Route::get('/contributions', 'ProjectController@showContribution');
Route::get('/projects/{id}', 'ProjectController@show');
Route::get('/sends', 'ProjectController@send');
/**************************************************************************************************************/


