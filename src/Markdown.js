import React from 'react';
import marked from 'marked';
import styles from './Markdown.module.scss';

class Markdown extends React.Component {
    constructor(props) {
        super(props);
        marked.setOptions({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
        });
    }

    render() {
        const { text } = this.props;
        const html = marked(text || '');
        return (
            <div
                className={styles.markdown}
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: html }}
            />
        );
    }
}

export default Markdown;
