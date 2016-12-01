<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuario extends CI_Model {
    
    public $idUsuario;
    public $nome;
    public $login;
    public $idFuncao;
    public $status;
    public $dataCriacao;

    public function __construct($id = 0) {
        // Call the CI_Model constructor
        parent::__construct();

        if($id) {
            return $this->get_usuario($id);
        }
    }
    
    public function get_usuario($idUsuario) {
        $this->load->database();
        $query = $this->db->get_where("usuario", array('idUsuario' => $idUsuario));
        $this->db->close();
        $this->nome = $query->row('nome');
        return $this;
        //return json_encode($query->row()); //nao posso passar a senha !!!!
    }

    public function valida_login($login, $senha){
        $this->load->database();
        $query = $this->db->get_where('usuario', array('login' => $login, 'senha' => $senha));
        if($query->row('idUsuario')){
            return $query->row('idUsuario');
        } else {
            return false;
        }
    }
}
