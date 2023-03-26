## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## More

Nextjs App showing all Pokemons and their details (strengths, moves, etc),

I googled pokemons and there was a card list and that was what gave me the idea to not use a table like anyone would.

The first set of 16 are listed on page load and for every "next" click, the next 16 are loaded

I used the router query to handle the page information across board

Onclicking the card loads the details of the clicked Pokemon on a drawer on the right

There is a types file in the roor directory that handles typing of the objects
