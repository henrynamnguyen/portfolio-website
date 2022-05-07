import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'jgn6qp4e',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skMKiI9ddlCMCgU9eAulVUjDdnZG072HlK4mHEHqUuC1VYbg9yVmS9GXxH2xBtJkM9uVoKaDMLnr6YDVhi7N3yYvIx4tnw5IR8FZiVZFW4IaoIPXN9uXfUPB4Kn4Xp981Db7f0Rd4TE0ONnV9fpQ8RIfg3CosGswQgrrG3QgyuiehhLSqNN9'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);