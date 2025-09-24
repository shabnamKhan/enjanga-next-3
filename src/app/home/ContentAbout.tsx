import { Grid, Column } from '@carbon/react';
import { CustomTile } from 'enjanga-next-3-components-lib'; // ENJ NPM component library
import '@/styles/_grid-of-customTiles.scss';
import { ContentfulFetcher } from '@/libs/ContentfulFetcher';
import { CP_nameType } from 'enjanga-next-3-components-lib';

const ContentAbout = () => (
  <Grid className="grid-of-customTiles grid-of-customTiles-1">
    <ContentfulFetcher dataFor="List of About Info">
      {({ orderedItems }) => {
        const card1 = orderedItems && orderedItems[0];
        const card2 = orderedItems && orderedItems[1];
        const card3 = orderedItems && orderedItems[2];

        return (
          <>
            <Column
              lg={{ span: 5, offset: 11 }}
              md={{ span: 4, offset: 4 }}
              sm={4}
              className=""
            >
              <Grid className="tabs-group-content--single-col">
                <Column lg={16} md={8} sm={4}>
                  <CustomTile
                    className=""
                    featuredText={{
                      heading: {
                        children: card1?.title,
                        level: 3,
                      },
                      smartText: {
                        plainText: card1?.blurb,
                      },
                    }}
                    layoutStyle="card"
                    modalIsAvailable={true}
                    modalRichDescription={card1?.description}
                    media="pictogram"
                    mediaPictogram={card1?.icon as CP_nameType}
                  />
                </Column>
              </Grid>
            </Column>

            <Column lg={{ span: 10, offset: 6 }} md={8} sm={4} className="">
              <Grid className="tabs-group-content">
                <Column lg={5} md={4} sm={4}>
                  <CustomTile
                    className=""
                    featuredText={{
                      heading: {
                        children: card2?.title,
                        level: 3,
                      },
                      smartText: {
                        plainText: card2?.blurb,
                      },
                    }}
                    layoutStyle="card"
                    modalIsAvailable={true}
                    modalRichDescription={card2?.description}
                    media="pictogram"
                    mediaPictogram={card2?.icon as CP_nameType}
                  />
                </Column>

                <Column lg={5} md={4} sm={4}>
                  <CustomTile
                    className=""
                    featuredText={{
                      heading: {
                        children: card3?.title,
                        level: 3,
                      },
                      smartText: {
                        plainText: card3?.blurb,
                      },
                    }}
                    layoutStyle="card"
                    modalIsAvailable={true}
                    modalRichDescription={card3?.description}
                    media="pictogram"
                    mediaPictogram={card3?.icon as CP_nameType}
                  />
                </Column>
              </Grid>
            </Column>
          </>
        );
      }}
    </ContentfulFetcher>
  </Grid>
);

export default ContentAbout;
