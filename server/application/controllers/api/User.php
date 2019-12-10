<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use chriskacerguis\RestServer\RestController;

class User extends RestController {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();
        $this->load->model('User_model');
    }

    public function users_get()
    {
        // Users from a data store e.g. database
        $users = User_model::all();

        $this->response( $users, 200 );

        
    }
    public function store_get()
    {
        // Users from a data store e.g. database
        $users = User_model::all();
        $user = new User_model;
        $user->email = "baru@email.com";
        $user->lastname = "baru";
        $user->firstname = "user";
        $user->save();

        $this->response( $users, 200 );

        
    }
}