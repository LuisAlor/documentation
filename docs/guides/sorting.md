---
id: sorting
title: Ordering results
sidebar_label: Sorting
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Sometimes, we also need to specify a particular order for sorting the results.

:::tip In short
You can order results by a specific value with the `order[FIELD]=asc|desc...` parameter.
:::

### Basic sorting

Let's sort plants by year, in a **ascending** order:

https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order[year]=asc


<Tabs
  groupId="supports"
  defaultValue="browser"
  values={[
    {label: 'Browser', value: 'browser'},
    {label: 'CURL', value: 'curl'},
    {label: 'NodeJS', value: 'node'},
  ]}
>
<TabItem value="browser">

Open your browser and navigate to

[`https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order[year]=asc`](https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order[year]=asc)

</TabItem>
<TabItem value="curl">

In your terminal:

```bash
curl 'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order[year]=asc'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order[year]=asc');
  const json = await response.json();
  console.log(json);
})();
```

</TabItem>
</Tabs>


And we got:

```json
{
    "data": [
        {
            "author": "(Herder) C.Winkl.",
            "bibliography": "Trudy Imp. S.-Peterburgsk. Bot. Sada 11: 170 (890)",
            "common_name": null,
            "complete_data": null,
            "family_common_name": null,
            "genus_id": 8723,
            "id": 290225,
            "image_url": null,
            "links": {
                "genus": "/api/v1/genus/jurinea",
                "self": "/api/v1/plants/jurinea-semenovii",
                "species": "/api/v1/plants/jurinea-semenovii/species"
            },
            "main_species_id": 433678,
            "observations": "C. Asia",
            "scientific_name": "Jurinea semenovii",
            "slug": "jurinea-semenovii",
            "vegetable": false,
            "year": 890
        },
        // 29 more
    ],
    "links": {
        "first": "/api/v1/plants?order%5Byear%5D=asc&page=1",
        "last": "/api/v1/plants?order%5Byear%5D=asc&page=21005",
        "next": "/api/v1/plants?order%5Byear%5D=asc&page=2",
        "self": "/api/v1/plants?order%5Byear%5D=asc"
    },
    "meta": {
        "total": 420092
    }
}
```


### Multiple sorting

You can also add secondary sortings by chaining another `order` parameter:

Let's sort plants by year, in a **ascending** order, then by scientific_name, in **descending** order:

```
https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&order[year]=asc&order[scientific_name]=desc
```


### Excluding null values

Sorting on a value that is possibly null will show the entries with null values first.
For example, if we want to get the tallest trees, we will have trees with `null` maxmimum height first:

```bash
# Get all plants
# -> with tree ligneous type (filter[ligneous_type]=tree)
# -> ordered by maximum height descending (highest first) (order[maximum_height_cm]=desc)
curl "https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[ligneous_type]=tree&order[maximum_height_cm]=desc"
```

To avoid that, you can exclude null values ([see Filtering](filtering#exclude-null-values)):

```bash
# Get all plants
# -> with tree ligneous type (filter[ligneous_type]=tree)
# -> ordered by maximum height descending (highest first) (order[maximum_height_cm]=desc)
# -> and without plants having a null maximum height (filter_not[maximum_height_cm]=null)
curl "https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[ligneous_type]=tree&order[maximum_height_cm]=desc&&filter_not[maximum_height_cm]=null"
```




