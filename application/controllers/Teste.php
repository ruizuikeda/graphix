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

    public function hash(){
        if($this->input->post('hash')!='ikeda') {
            echo '-1';
            exit;
        }
        echo $this->security->get_csrf_hash();
    }

    public function validar_login(){
        #  ------------------------------------------
        # | Validando o formulário                   |
        #  ------------------------------------------
        # carregando a biblioteca de validação de formulários
        $this->load->library('form_validation');
        //$this->load->library('security');
        # setando as regras do formulário
        $this->form_validation->set_rules('login', 'Login', 'trim|required|min_length[5]|max_length[12]|alpha_dash');
        $this->form_validation->set_rules('senha', 'Senha', 'trim|required');
        # validando
        if ($this->form_validation->run() == FALSE)
        {
            #  ------------------------------------------
            # | Formulário recusado (erro)               |
            #  ------------------------------------------
            echo '-1';
            exit;
        }
        else
        {
            #  ------------------------------------------
            # | Formulário aceito                        |
            #  ------------------------------------------
            #
            #  ------------------------------------------
            # | Validando o formulário                   |
            #  ------------------------------------------
            # carregando o model do usuário para validar o login
            $this->load->model('usuario/usuario');
            # pegando as informações passada via post
            $post = $this->input->post();
            # validando o usuário
            $idUsuario = $this->usuario->valida_login($post['login'], $post['senha']);
            if($idUsuario)
            {
                #  ------------------------------------------
                # | Usuário validado                         |
                #  ------------------------------------------
                #
                #  ------------------------------------------
                # | Usuário informações                      |
                #  ------------------------------------------
                $usuario = $this->usuario->get_usuario($idUsuario);
                #
                #  ------------------------------------------
                # | Tratando as SESSIONS                     |
                #  ------------------------------------------
                # carregando a biblioteca da session
                $this->load->library('session');
                # criando o array do usuário
                $usuario_session = array(
                    'nome' => $usuario->nome
                );
                # inserindo na session
                $this->session->set_userdata($usuario_session);
                #  ------------------------------------------
                # | SUCESSO                                  |
                # |     retornando um json com as info       |
                # |     do usuário logado                    |
                #  ------------------------------------------
                echo json_encode($usuario);
            }
            else
            {
                #  ------------------------------------------
                # | Usuário recusado (erro)                  |
                #  ------------------------------------------
                echo '-1';
                exit;
            }
        }

    }
}







