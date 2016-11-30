--
-- Estrutura para tabela `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
    `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(512) NOT NULL,
    `login` varchar(512) NOT NULL,
    `senha` varchar(512) NOT NULL,
    `idFuncao` smallint(6) NOT NULL DEFAULT '1',
    `status` tinyint(4) NOT NULL DEFAULT '1',
    `dataCriacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;