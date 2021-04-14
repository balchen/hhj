export class Addisjon {
    constructor(min, max) {
        this.ny = () => {
            this.x = Math.floor(min + Math.random() * (max - min));
            this.y = Math.floor(min + Math.random() * (max - min));

            return {
                oppgavetekst: () => {
                    return this.x + " + " + this.y;
                },

                sjekkSvar: (svar) => {
                    if (this.x + this.y === parseInt(svar))
                        return true;
                    else
                        return false;
                }
            };
        };
    }
}