<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Use App\Http\Controllers\AuthController;

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

Route::group(['prefix'=>'auth'],function (){
   Route::post('signup',[AuthController::class,'signup']);
   Route::post('login',[AuthController::class,'login']);
   Route::group(['middleware'=>'auth:api'],function (){
      Route::get('logout',[AuthController::class,'logout']);
      Route::get('user',[AuthController::class,'user']);
   });
});

Route::get('sqlsrv',function (){
    return response()->json(DB::connection('sqlsrv')->select('select TOP(100) * from [dbo].[user]'));
});
