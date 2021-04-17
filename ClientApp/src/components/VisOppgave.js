import React, { Component } from 'react';

export class VisOppgave extends Component {
    constructor() {
        super();
        this.state = {
            svar: "",
            nesteOppgaveTilgjengelig: false
        };

        this.sjekkSvar = this.sjekkSvar.bind(this);
        this.nesteOppgave = this.nesteOppgave.bind(this);
        this.svarEndret = this.svarEndret.bind(this);
    }

    svarEndret(event) {
        this.setState({ svar: event.target.value });
    }

    sjekkSvar() {
        var riktig = this.props.oppgave.sjekkSvar(this.state.svar);

        if (riktig) {
            this.setState({ nesteOppgaveTilgjengelig: true });
            this.props.riktigSvar();
        }
        else {
            this.setState({ svar: "" });
        }
    }

    nesteOppgave() {
        this.props.nesteOppgave();
        this.setState({ svar: "", nesteOppgaveTilgjengelig: false });
    }

    render() {
        return (
            <div className="oppgave">
                <div className="oppgavetekst">{this.props.oppgave.oppgavetekst()}</div>
                <input autoFocus className="svartekst" type="text" value={this.state.svar} onChange={this.svarEndret} />
                <button className="svarknapp" onClick={this.sjekkSvar}>Sjekk svar</button>
                <button className="nesteoppgaveknapp" onClick={this.nesteOppgave} disabled={!this.state.nesteOppgaveTilgjengelig}>Neste oppgave</button>
            </div>
        );
    }
}
