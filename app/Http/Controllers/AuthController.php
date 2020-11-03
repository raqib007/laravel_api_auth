<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(Request $request){
       $request->validate([
          'name'=>'required|string',
          'email'=>'required|string|email|unique:users',
          'password'=>'required|string|confirmed'
       ]);

       $user = new User([
          'name'=>$request['name'],
          'email'=>$request['email'],
          'password'=> bcrypt($request['password'])
       ]);

       $user->save();

       return response()->json(['message'=>'User Created!'],201);
    }

    public function login(Request $request){
       $request->validate([
          'email'=>'required|string|email',
          'password'=>'required|string',
          'remember_me'=>'boolean'
       ]);

       $credentials = request(['email','password']);

       if(!Auth::attempt($credentials))
           return response()->json([
               'message'=>'Invalid Credentials!'
           ],401);

       $user = $request->user();

       $gToken = $user->createToken('Personal Access Token');
       $token = $gToken->token;

       if($request->remember_me)
           $token->expires_at = Carbon::now()->addWeeks(1);

       $token->save();

       return response()->json([
           'email'=> $credentials['email'],
           'access_token' => $gToken->accessToken,
           'token_type' => 'Bearer',
           'expires_at' => Carbon::parse($gToken->token->expires_at)->toDateTimeString()
       ]);
    }

    public function logout(Request $request){
       $request->user()->token()->revoke();
       return response()->json(['message'=>'User Logged Out!']);
    }

    public function user(Request $request){
        return response()->json($request->user());
    }
}
