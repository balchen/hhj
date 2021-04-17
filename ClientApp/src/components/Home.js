import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { Addisjon } from './Addisjon';
import { VisOppgave } from './VisOppgave';
import allebamser from './bamser.json';

export class Home extends Component {
    constructor() {
        super();

        this.nesteOppgave = this.nesteOppgave.bind(this);
        this.riktigSvar = this.riktigSvar.bind(this);

        var oppgaveType = new Addisjon(1, 10);

        this.state = {
            oppgaveType: oppgaveType,
            oppgave: oppgaveType.ny(),
            poeng: parseInt("0" + localStorage.getItem("poeng")),
            bamser: JSON.parse(localStorage.getItem("bamser") || "[]") || []
        };
    }

    nesteOppgave() {
        this.setState({ oppgave: this.state.oppgaveType.ny() });
    }

    riktigSvar() {
        var nyepoeng = this.state.poeng + 1;
        this.setState({ poeng: nyepoeng });
        localStorage.setItem("poeng", nyepoeng);

        if (nyepoeng % 5 === 0) {
            var bamseIndex = Math.floor(Math.random() * (allebamser.length));
            var nybamse = { ...allebamser[bamseIndex], shiny: Math.random() > 0.9 };
            var bamser = this.state.bamser;
            bamser.push(nybamse);
            this.setState({ bamser: bamser });
            localStorage.setItem("bamser", JSON.stringify(bamser));
        }
    }

    render() {
        var bamseliste = this.state.bamser.map(b => <div className="bamse"><img src={b.imageUrl} /></div>);
        return (
            <div>
                <h1>Bamsespillet HHJ</h1>
                <Row>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <VisOppgave oppgave={this.state.oppgave} riktigSvar={this.riktigSvar} nesteOppgave={this.nesteOppgave} />
                        <div className="poeng">Poeng: {this.state.poeng}</div>
                    </div>
                    <div className="bamser col-sm-12 col-md-6 col-lg-9">{bamseliste}</div>
                </Row>
            </div>
        );
    }
}
