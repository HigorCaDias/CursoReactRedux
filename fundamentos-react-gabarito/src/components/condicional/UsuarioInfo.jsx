import React from "react";
import If, { Else } from "./If";

export default (props) => {
    const usuario = props.usuario || {};
    return (
        <div>
            {/* Caso passe um usuario e esse usuario nao tenha nenhum nome,nenhuma informação será exibida */}
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem vindo <strong>Amigão</strong>!
                </Else>
            </If>
        </div>
    );
};
