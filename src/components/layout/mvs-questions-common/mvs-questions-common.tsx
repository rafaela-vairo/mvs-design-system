import { Component, h, State } from '@stencil/core';

@Component({
    tag: 'mvs-questions-common',
    styleUrl: 'mvs-questions-common.scss',
    shadow: true,
})

export class MvsQuestionsCommon {
    
    @State() questions: Array<any> = [];

    // Obtém todas as perguntas comuns []
    // async componentWillLoad() {
         
    // }

    showResponse(e) {
        // e.target.toggle("active");
        const panel = e.target.parentElement.parentElement.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

    render() {

        return (
            <mvs-grid>
                <div class="theme">
                    <div class="title">
                        <mvs-title
                            level="t3"
                        >
                            Vestibular
                        </mvs-title>
                    </div>
                    <div class="question">
                        <div class="accordion" onClick={this.showResponse}>
                            <mvs-subtitle type="one">
                                Quando será o vestibula?
                            </mvs-subtitle>
                        </div>
                        <div class="panel">
                            <mvs-paragraph bodytwo>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar turpis arcu, et iaculis lacus imperdiet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc rutrum orci sed ligula volutpat condimentum. Cras blandit suscipit euismod. Donec et malesuada magna, eu dignissim felis. Aliquam suscipit massa sed ante interdum vestibulum. Quisque at dolor ipsum.
                            </mvs-paragraph>
                        </div>
                    </div>
                </div>
            </mvs-grid>
        );
    }
}
