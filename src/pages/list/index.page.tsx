import type { NextPage } from "next";
import Head from "next/head";
import { createLocalStorageStateHook } from "use-local-storage-state";
import { Monitor } from "../../components/Monitor/Monitor";
import { Source, sourcesCategories } from "../../sources";

export const useSavedSelectedItem = createLocalStorageStateHook<string | undefined>(
  "__tele_selected__"
);

const ListPage: NextPage = () => {
  const [sourceSlug, setSourceSlug] = useSavedSelectedItem();

  const handleSelectSource = (source: Source) => {
    setSourceSlug(source.slug);
  };

  return (
    <div>
      <Head>
        <title>Tele - List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-2">
            {sourcesCategories.map((category) => (
              <div key={category.name}>
                <h3 style={{ color: "white" }}>{category.name}</h3>
                <div className="channel-list">
                  {Object.values(category.sources).map((source) => (
                    <button
                      key={source.slug}
                      className="channel"
                      dangerouslySetInnerHTML={{ __html: source.titleHtml }}
                      onClick={() => handleSelectSource(source)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="col-10 p-3">
            <Monitor
              size={12}
              onChange={handleSelectSource}
              sourceSlug={sourceSlug}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;