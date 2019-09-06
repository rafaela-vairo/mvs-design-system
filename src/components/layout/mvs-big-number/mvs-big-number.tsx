import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'mvs-big-number',
    styleUrl: 'mvs-big-number.scss',
    shadow: true
})

export class MvsBigNumber {

    @Prop() elements: Array<any> = [
        { id: 1, icon: 'relogio', title: 900, subtitle: 'subtitle' },
        { id: 2, icon: 'abelha', title: 'title', subtitle: 'subtitle' },
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
                                        <span class={`icon icon-${element.icon}`}></span>
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
