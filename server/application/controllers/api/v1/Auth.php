<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use chriskacerguis\RestServer\RestController;

class Auth extends RestController {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();
        $this->load->model('User_model');
    }

    public function email_unique_get()
    {
        $response = [];
        if($this->get('email')){
            $email=$this->get('email');
            $user = User_model::where('email',$email)->first();
            if($user){
                $response = [
                    "msg"=>"Successfully retrieved!",
                    "unique"=>false
                ];
            }
            else{
                $response = [
                    "msg"=>"Successfully retrieved!",
                    "unique"=>true
                ];
            }
        }
        $this->response( $response, 200 );

        
    }
    public function phone_unique_get()
    {
        $response = [];
        if($this->get('phone')){
            $phone='+'.$this->get('phone');
            $user = User_model::where('mobile',$phone)->first();
            if($user){
                $response = [
                    "msg"=>"Successfully retrieved!",
                    "unique"=>false
                ];
            }
            else{
                $response = [
                    "msg"=>"Successfully retrieved!",
                    "unique"=>true
                ];
            }
        }
        $this->response( $response, 200 );

        
    }

    public function register_post() {
        $user = new User_model;
        $user->firstname = $this->post('firstname');
        $user->lastname = $this->post('lastname');
        $user->email = $this->post('email');
        $user->mobile = $this->post('mobile');
        $user->gender = $this->post('gender');
        $user->dob = $this->post('dob');
        $user->save();

        $this->response([
            "msg"=>"Successfully Saved!",
            "data"=>$user
        ], 200);
    }
}