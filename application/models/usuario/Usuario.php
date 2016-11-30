<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuario extends CI_Model {
    
    private $idUsuario;
    public $nome;
    public $login;
    private $senha;
    public $idFuncao;
    public $status;
    public $dataCriacao;

    public function __construct() {
        // Call the CI_Model constructor
        parent::__construct();
    }
    
    public function get_usuario($idUsuario) {
        $this->load->database();
        $query = $this->db->get_where("usuario", array('idUsuario' => $idUsuario));
        $this->db->close();
        return json_encode($query->row());
    }
}
