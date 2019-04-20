import FilterItem from "./FilterItem"

export default class TalkFilter extends React.PureComponent {
    constructor(props, context) {
        super(props, context)
    
        this._renderItems = this._renderItems.bind(this)
        this._renderTag = this._renderTag.bind(this)
        this._renderLevel = this._renderLevel.bind(this)
    }

    render() {
        return <div>
            {this._renderItems(this.props.tags, this._renderTag)}
            {this._renderItems(this.props.levels, this._renderLevel)}
        </div>
    }

    _renderItems(items, renderItem){
        const elements = items.map((item, index) => {
            return renderItem(index, item)
        })

        return <div>
            {elements}
        </div>
    }

    _renderTag(index, tag){
        return <FilterItem key={index} item={tag} addItem={this.props.addTag} removeItem={this.props.removeTag} />
    }

    _renderLevel(index, level){
        return <FilterItem key={index} item={level} addItem={this.props.addLevel} removeItem={this.props.removeLevel} />
    }
}