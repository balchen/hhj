import React, { Component } from 'react';
import { Addisjon } from './Addisjon';
import { VisOppgave } from './VisOppgave';

export class Home extends Component {
    constructor() {
        super();

        this.nesteOppgave = this.nesteOppgave.bind(this);
        this.riktigSvar = this.riktigSvar.bind(this);

        var oppgaveType = new Addisjon(1, 10);

        this.state = {
            oppgaveType: oppgaveType,
            oppgave: oppgaveType.ny(),
            poeng: parseInt("0" + localStorage.getItem("poeng"))
        };
    }

    nesteOppgave() {
        this.setState({ oppgave: this.state.oppgaveType.ny() });
    }

    riktigSvar() {
        this.setState({ poeng: this.state.poeng + 1 });
        localStorage.setItem("poeng", this.state.poeng + 1);
    }

    render() {
        return (
            <div>
                <h1>Bamsespillet HHJ</h1>
                <VisOppgave oppgave={this.state.oppgave} riktigSvar={this.riktigSvar} nesteOppgave={this.nesteOppgave} />
                <div className="poeng">Poeng: {this.state.poeng}</div>
            </div>
        );
    }
}
