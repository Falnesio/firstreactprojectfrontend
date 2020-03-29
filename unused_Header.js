import React from 'react';

export default function Header({ children }) { //props desintegrado
    return(
        <header>
            <h1>{children}</h1>
        </header>
    );
}

/*export default function Header(props) {
    return(
        <header>
            <h1>{props.children}</h1>
        </header> // com children
/!*        <header>
            <h1>{props.title}</h1> usando propriedades
        </header>*!/
    );
}*/


/*
Quando não se usa propriedades chamadas no App.js
default function Header() {
    return(
        <header>
            <h1>Be The Hero</h1>
        </header>
    );
}
export default Header;*/
