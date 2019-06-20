import TagText from './gameobjects/tagtext/TagText.js';
import SetValue from './utils/object/SetValue.js';

const GetAdvancedValue = Phaser.Utils.Objects.GetAdvancedValue;
const BuildGameObject = Phaser.GameObjects.BuildGameObject;

class TagTextPlugin extends Phaser.Plugins.BasePlugin {

    constructor(pluginManager) {
        super(pluginManager);

        //  Register our new Game Object type
        pluginManager.registerGameObject('rexTagText', this.addTagText, this.makeTagText);
    }

    start() {
        var eventEmitter = this.game.events;
        eventEmitter.once('destroy', this.destroy, this);
    }

    addTagText(x, y, text, style) {
        var gameObject = new TagText(this.scene, x, y, text, style);
        this.scene.add.existing(gameObject);
        return gameObject;
    }

    makeTagText(config, addToScene) {
        // style Object = {
        //     font: [ 'font', '16px Courier' ],
        //     backgroundColor: [ 'backgroundColor', null ],
        //     fill: [ 'fill', '#fff' ],
        //     stroke: [ 'stroke', '#fff' ],
        //     strokeThickness: [ 'strokeThickness', 0 ],
        //     shadowOffsetX: [ 'shadow.offsetX', 0 ],
        //     shadowOffsetY: [ 'shadow.offsetY', 0 ],
        //     shadowColor: [ 'shadow.color', '#000' ],
        //     shadowBlur: [ 'shadow.blur', 0 ],
        //     shadowStroke: [ 'shadow.stroke', false ],
        //     shadowFill: [ 'shadow.fill', false ],
        //     align: [ 'align', 'left' ],
        //     maxLines: [ 'maxLines', 0 ],
        //     fixedWidth: [ 'fixedWidth', false ],
        //     fixedHeight: [ 'fixedHeight', false ]
        // }

        var content = GetAdvancedValue(config, 'text', '');
        var style = GetAdvancedValue(config, 'style', null);

        //  Padding
        //      { padding: 2 }
        //      { padding: { x: , y: }}
        //      { padding: { left: , top: }}
        //      { padding: { left: , right: , top: , bottom: }}  

        var padding = GetAdvancedValue(config, 'padding', null);

        if (padding !== null) {
            style.padding = padding;
        }

        if (addToScene !== undefined) {
            config.add = addToScene;
        }

        var gameObject = new TagText(this.scene, 0, 0, content, style);
        BuildGameObject(this.scene, gameObject, config);

        //  Text specific config options:

        gameObject.autoRound = GetAdvancedValue(config, 'autoRound', true);
        gameObject.resolution = GetAdvancedValue(config, 'resolution', 1);

        return gameObject;
    }
}

SetValue(window, 'RexPlugins.GameObjects.TagText', TagText);

export default TagTextPlugin;