import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ChangeEventHandler, CSSProperties, useEffect, useState } from "react";
import { createLocalStorageStateHook } from "use-local-storage-state";
import Fullscreen1 from "../../../public/ui_icons/PantallaCompleta_1.svg";
import Fullscreen2 from "../../../public/ui_icons/PantallaCompleta_2.svg";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { Monitor } from "../../components/Monitor/Monitor";
import { Source } from "../../sources";
import { uuid } from "../../utils/uuid";
import { SourceNode } from "../layout/types";
import { initialGrid } from "./initialGrid";

const buttons: CSSProperties = {
  position: "absolute",
  bottom: "0.5em",
  width: "100%",
  height: "20px",
  lineHeight: "20px",
  textAlign: "center",
};
const reloadStyle: CSSProperties = {
  position: "absolute",
  bottom: "0.3em",
  right: "0.3em",
  width: "auto",
  height: "25px",
  lineHeight: "25px",
  textAlign: "left",
};

export const useSavedGrid =
  createLocalStorageStateHook<SourceNode[]>("__tele_grid__");

const GridPage: NextPage = () => {
  const launchFullScreen = () => {
    const element: any = document.documentElement;
    if (element.requestFullScreen) {
      element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }

    if (element.requestFullScreen) {
      element.requestFullScreen();
    }
  };
  // Lanza en pantalla completa en navegadores que lo soporten
  const cancelFullScreen = () => {
    if ((document as any).cancelFullScreen) {
      (document as any).cancelFullScreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitCancelFullScreen) {
      (document as any).webkitCancelFullScreen();
    }
  };
  const [size, setSize] = useState(6);

  const handleSizeChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSize(Number(event.target.value));
  };

  const [selectedSources, setSelectedSources] = useSavedGrid();

  useEffect(() => {
    if (!selectedSources) setSelectedSources(initialGrid);
  }, [selectedSources, setSelectedSources]);

  const handleSourceChange = (source: Source, idxToChange: number) => {
    setSelectedSources((sources) => {
      if (!sources) return;
      return sources.map((src, idx) => {
        if (idxToChange === idx) return { ...src, sourceSlug: source.slug };
        else return src;
      });
    });
  };

  const handleSourceAdd = () => {
    setSelectedSources((sources) => [
      ...(sources || []),
      {
        sourceSlug: "Barras",
        uuid: uuid(),
      },
    ]);
  };

  const handleSourceRemove = (idx: number) => {
    setSelectedSources((sources) => {
      if (!sources) return;
      return sources.filter((src, index) => index !== idx);
    });
  };

  return (
    <div>
      <Head>
        <title>Tele - Grid</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row no-gutters row-canales" id="los-canales">
        {selectedSources &&
          selectedSources.map((source, idx) => (
            <Monitor
              size={size}
              sourceSlug={source.sourceSlug}
              key={`${source.sourceSlug}_${idx}`}
              onChange={(newSource) => handleSourceChange(newSource, idx)}
              onRemove={() => handleSourceRemove(idx)}
            />
          ))}
      </div>

      <div className="Botones" style={buttons}>
        <div className="SeleccionarStreamsPorFila waves-effect waves-light">
          <select
            title="Streams por fila"
            className="StreamsPorFila"
            id="Stream_por_fila"
            onChange={handleSizeChange}
          >
            <option value="4">STREAMS</option>
            <option value="12">1 STREAM</option>
            <option value="6">2 STREAMS</option>
            <option value="4">3 STREAMS</option>
          </select>
        </div>

        <a onClick={() => launchFullScreen()}>
          <span
            // type="button"
            className="Boton_PantallaCompleta waves-effect waves-light"
          >
            <Fullscreen1 style={{ height: "15px", width: "auto" }} />
          </span>
        </a>
        <Link href="/" passHref>
          <ActionButton>ㅤIR A HOMEㅤ</ActionButton>
        </Link>
        <ActionButton onClick={handleSourceAdd}>Agregar</ActionButton>

        <a onClick={() => cancelFullScreen()}>
          <span
            // type="button"
            className="Boton_PantallaCompleta waves-effect waves-light"
          >
            ﾠ
            <Fullscreen2 style={{ height: "15px", width: "auto" }} />ﾠ
          </span>
        </a>
      </div>
      <div style={reloadStyle}>
        <a href="javascript:location.reload()">
          <span
            // type="button"
            className="BotonRecargarPagina"
          >
            {/* <img
              style={{ height: "25px", width: "auto" }}
              src="imagenes/Icono_Recargar.svg"
            ></img> */}
          </span>
        </a>
      </div>
    </div>
  );
};

export default GridPage;