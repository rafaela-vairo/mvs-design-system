import { Component, h } from '@stencil/core';

@Component({
    tag: 'mvs-footer',
    styleUrl: 'mvs-footer.scss',
    shadow: true,
})

export class MvsFooter {

    render = () => (
        <footer>
            <mvs-flexgrid container id="container">
                <mvs-flexgrid item sm={12} md={12} lg={12} xl={12} class="icons">
                    <div class="icon">icone 1</div>
                    <div class="icon">icone 2</div>
                    <div class="icon">icone 3</div>
                    <div class="icon">icone 4</div>
                    <div class="icon">icone 5</div>
                </mvs-flexgrid>
                <mvs-flexgrid item sm={12} md={12} lg={12} xl={12} class="icons">
                    <div class="icon">icone 1</div>
                    <div class="icon">icone 2</div>
                    <div class="icon">icone 3</div>
                    <div class="icon">icone 4</div>
                    <div class="icon">icone 5</div>
                </mvs-flexgrid>
                <mvs-flexgrid item sm={12} md={12} lg={12} xl={12} class="text-end">
                    <mvs-paragraph bodytwo>
                        <mvs-strong>
                            <div >
                                Feito por Coordcom
                            </div> 
                        </mvs-strong>
                    </mvs-paragraph>
                </mvs-flexgrid>
            </mvs-flexgrid>
        </footer>
    )
}
