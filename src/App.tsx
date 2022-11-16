import Bio from "./components/Bio";
import Bio2 from "./components/Bio2";
import Bio3 from "./components/Bio3";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Photos from "./components/Photos";

const Data1 = [
  {
    title: "未来の目的",
    content:
      "エンジニアになることです。その後は管理スキルやソフトスキルなどを向上してもっと責任を求めるポジションにチャレンジしたいと思います。その目標を達成するために、まず、大学の教育プログラムをうまく完了し、ラボーで他の分野も研究して、より広い知識とスキル、ソフトスキル、チームワークスキルを身に付けるように努めます。",
  },
];

const Data2 = [
  {
    title: "2019",
    content: "Graduted High School",
  },
  {
    title: "2019",
    content: "Hanoi University of Science and Technology",
  },
  {
    title: "2023",
    content: "Graduted university and start working at MorsonJP",
  },
];

const Data3 = [
  {
    title: "C/C++",
    content: "Embedded Programming",
  },
  {
    title: "Python",
    content: "Computer Vision with OpenCV",
  },
  {
    title: "PHP",
    content: "Laravel",
  },
  {
    title: "React",
    content: "Currently Studying",
  },
];

export default function App() {
  return (
    <div className="pb-20">
      <Header />
      <Main />
      <Bio BioData={Data1} />
      <Bio2 BioData={Data2} />
      <Bio3 BioData={Data3} />
      <Photos />
      <Footer />
      <Contact />
    </div>
  );
}
