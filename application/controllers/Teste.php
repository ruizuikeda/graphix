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
}
