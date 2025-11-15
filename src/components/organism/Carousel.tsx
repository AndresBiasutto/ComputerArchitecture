import React, { useState, useEffect } from "react";
import AImage from "../atom/AImage";

const Carousel = () => {
  const slides = [
    {
      image:
        "https://wallpapers.com/images/hd/2440x1440-programming-background-2440-x-1440-qucb7t04z3jcmgwi.jpg",
      title: "How to: Create a new C# console application",
      link: "",
      text: "From SDK download to running",
    },
    {
      image:
        "https://marketing4ecommerce.mx/wp-content/uploads/2017/03/KarlaRequerimientos1200Comprimido.jpg",
      title: "Requirements",
      link: "",
      text: "Operating System: Windows / macOS / Linux. Internet connection to download the SDK. (Optional) Visual Studio Code for editing and debugging.",
    },
    {
      image: "https://www.muylinux.com/wp-content/uploads/2020/11/dotNET.png",
      title: "Step 1: Download the .NET SDK",
      link: "https://dotnet.microsoft.com/download",
      text: "Open your browser and go to https://dotnet.microsoft.com/download, then choose the latest stable version of the .NET SDK.",
    },
    {
      image:
        "https://itechtics.com/wp-content/uploads/2022/09/Install-.NET-package-using-winget.jpg",
      title: "Step 2: Install the SDK",
      link: "",
      text: "Run the installer and follow the steps. After installation, open a new terminal and type 'dotnet --version' to confirm it was installed correctly.",
    },
    {
      image:
        "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F10%2FCommand-line-text-colored-hed.jpg&signature=67c231be655d4ca81d593e708223413f",
      title: "Step 3: Open the Command Line",
      link: "",
      text: "Windows: open Command Prompt or PowerShell. macOS/Linux: open Terminal. In VS Code: go to View > Terminal to use the integrated terminal.",
    },
    {
      image:
        "https://pureinfotech.com/wp-content/uploads/2022/03/windows-11-create-folder-hero.webp",
      title: "Step 4: Create the Project Folder",
      link: "",
      text: "Use the commands: mkdir MyConsoleApp, cd MyConsoleApp, dotnet new console -n MyConsoleApp, cd MyConsoleApp. This creates a default Hello World project.",
    },
    {
      image: "https://dragondigital.es/wp-content/uploads/run_logo-1.jpg",
      title: "Step 5: Run the Application",
      link: "",
      text: "Inside your project folder, type 'dotnet run'. You should see 'Hello, World!'. You can modify Program.cs and run it again.",
    },
    {
      image:
        "https://res.cloudinary.com/dvpchtyzq/image/upload/v1761250525/csharpStruct_q6bqhh.png",
      title: "Project Structure Overview",
      link: "",
      text: "Main files: MyConsoleApp.csproj (project file) and Program.cs (source code). You can edit Program.cs to change the output message.",
    },
    {
      image: "https://wallpaperaccess.com/full/5809798.png",
      title: "Step 6: Use Visual Studio Code (Optional)",
      link: "https://code.visualstudio.com/docs/languages/csharp",
      text: "Open VS Code from your project with 'code .'. Add required assets when prompted. Use Run and Debug panel to test your app.",
    },
    {
      image:
        "https://itsfoss.com/content/images/wordpress/2020/10/linux-package-manager-explanation.png",
      title: "Step 7: Add External Packages (Optional)",
      link: "",
      text: "Install packages with 'dotnet add package <packageName>' (example: Newtonsoft.Json) and 'dotnet restore' to download dependencies.",
    },
    {
      image:
        "https://wallpapers.com/images/hd/glitch-effect-82eoevavwkr0xdo8.jpg",
      title: "Common Errors and Quick Fixes",
      link: "https://learn.microsoft.com/dotnet/core/install/",
      text: "dotnet: command not found → restart terminal or reinstall SDK. VS Code doesn't detect C# → install the C# extension and restart.",
    },
    {
      image:
        "https://e01-phantom-elmundo.uecdn.es/325bb171c950437d2c2fd5b5a22ef7b6/crop/121x0/1199x719/f/webp/assets/multimedia/imagenes/2020/03/27/15853296823582.jpg",
      title: "Created by Andrés Biasutto",
      link: "",
      text: "T.P. Inglés- Analisis de sistemas - Primer año",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const back = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Rotación automática
  useEffect(() => {
    const interval = setInterval(next, 15000);
    return () => clearInterval(interval);
  }, [currentIndex, next]);

  return (
    <article className="relative w-full h-screen flex shrink-0 overflow-hidden shadow-2xl rounded-2xl">
      {/* contador superior */}
      <div className="rounded-full bg-gray-600 text-white absolute top-5 left-5 text-5xl px-2 text-center z-10 p-6">
        <span>{currentIndex + 1}</span>/<span>{slides.length}</span>
      </div>

      {/* imágenes */}
      {slides.map((slide, index) => (
        <figure
          key={index}
          className={`absolute w-full flex flex-col justify-center items-center inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full flex flex-col justify-center items-center">
            <AImage link={slide.image} text={slide.title} />
          </div>

          <figcaption className="absolute h-auto w-2/3 inset-x-0 top-0 z-20 mx-auto p-4 text-6xl text-center bg-white/40 text-black">
            {slide.title}
          </figcaption>
          <figcaption className="absolute inset-x-0 bottom-0 z-20 mx-auto p-4 text-sm text-center bg-black/40 text-white">
            {slide.text}
            <br></br>
            <a href={slide.link} target="_blank">
              {slide.link ? slide.link : ""}
            </a>
          </figcaption>
        </figure>
      ))}

      {/* botones */}
      <button
        onClick={back}
        className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-20 bg-gray-100 hover:bg-gray-200"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-20 bg-gray-100 hover:bg-gray-200"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </article>
  );
};

export default Carousel;
