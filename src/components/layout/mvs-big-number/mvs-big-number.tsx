import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'mvs-big-number',
    styleUrl: 'mvs-big-number.scss',
    shadow: true
})

export class MvsBigNumber {

    @Prop() elements: Array<any> = [
        { 
            id: 1, 
            icon: 'https://taiga.tic.ufrj.br/media/attachments/2/e/f/4/6cf57a32197e232ecd7f71e2b67125eff36ee525739e5bf1b0d15275ef48/relogio.svg', 
            title: 900, 
            subtitle: 'subtitle' 
        },
        { id: 2, icon: 'https://taiga.tic.ufrj.br/media/attachments/2/e/f/4/6cf57a32197e232ecd7f71e2b67125eff36ee525739e5bf1b0d15275ef48/relogio.svg', title: 'title', subtitle: 'subtitle' },
        { id: 3, icon: 'https://taiga.tic.ufrj.br/media/attachments/2/e/f/4/6cf57a32197e232ecd7f71e2b67125eff36ee525739e5bf1b0d15275ef48/relogio.svg', title: 'title', subtitle: 'subtitle' },
        { id: 4, icon: 'https://taiga.tic.ufrj.br/media/attachments/2/e/f/4/6cf57a32197e232ecd7f71e2b67125eff36ee525739e5bf1b0d15275ef48/relogio.svg', title: 'title', subtitle: 'subtitle' },
        { id: 5, icon: 'https://taiga.tic.ufrj.br/media/attachments/2/e/f/4/6cf57a32197e232ecd7f71e2b67125eff36ee525739e5bf1b0d15275ef48/relogio.svg', title: 'title', subtitle: 'subtitle' },
    ];

    render = () => (
        <div>
            <mvs-flexgrid container>
                <mvs-flexgrid item lg={2} xl={2} />
                <mvs-flexgrid item sm={12} md={12} lg={8} xl={8}>
                    <mvs-flexgrid container class="content">
                        {
                            this.elements.map(element => (
                                <mvs-flexgrid item sm={12} md={3} lg={3} xl={3} key={element.id} class="element">
                                    <div>
                                        <svg xlinkHref={element.icon} fill="red" />
                                        {/* <img 
                                            class="icon"
                                            src={element.icon}
                                            alt={element.title}
                                        /> */}
                                        <mvs-paragraph>
                                            <mvs-strong>
                                                <div class="title">
                                                    {element.title}
                                                </div>
                                            </mvs-strong>
                                        </mvs-paragraph>
                                        <mvs-paragraph bodytwo>
                                            <mvs-strong>
                                                <div class="subtitle">
                                                    {element.subtitle}
                                                </div>
                                            </mvs-strong>
                                        </mvs-paragraph>
                                    </div>
                                </mvs-flexgrid>
                            ))
                        }
                    </mvs-flexgrid>
                </mvs-flexgrid>
                <mvs-flexgrid item lg={2} xl={2} />
            </mvs-flexgrid>
        </div>
    );
}
