# snippo-ui

Reusable UI components and logic for Snippo snippet generation.

## Usage (React)

```
import SnippetsApp from "snippo-ui/react/SnippetsApp";
import { wordpressApi } from "snippo-ui/react/api/wordpressApi";

<SnippetsApp api={wordpressApi} />
```

## API Implementations
- `wordpressApi`: For use in WordPress plugins (uses @wordpress/api-fetch)
- `chromeApi`: For use in Chrome extensions (uses fetch)

## License
MIT
