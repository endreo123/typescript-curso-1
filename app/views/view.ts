export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean){
        const elemento = document.querySelector(seletor);

        if(elemento) {
            this.elemento = elemento as HTMLElement
        }else {
            throw new Error(`Seletor ${seletor} não existe no DOM`)
        }

        if(escapar) {
            this.escapar = escapar;
            /*
            sdfsdasddhyerdhearhaeesadrtheart
            */
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);
        
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }

        this.elemento.innerHTML = template;
    }
}