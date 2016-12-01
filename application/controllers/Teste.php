<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Teste extends CI_Controller {

    public function index($v)
    {
        echo 'index'.$v;
    }
    
    public function usuario($idUsuario){
        $this->load->model('usuario/usuario');
        $usuario = $this->usuario->get_usuario($idUsuario);
        echo "<pre>"; print_r($usuario);
    }

    public function validar_login(){
        //$_POST = json_decode(file_get_contents('php://input'), true);
        $post = $this->input->post();
        $this->load->model('usuario/usuario');
        $idUsuario = $this->usuario->valida_login($post['login'], $post['senha']);
        if($idUsuario) {
            $usuario = $this->usuario->get_usuario($idUsuario);
            echo json_encode($usuario);
        } else {
            echo '-1';
            exit;
        }
    }
}
