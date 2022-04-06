import { projectTableData } from "../components/data/projectTable";
import './doc.css'
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    LinearGradient,
  } from "@react-pdf/renderer";
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });
  
  // Create Document Component
  function BasicDocument() {
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Hello                  {projectTableData.map((project) => {return <div>{project.title}</div>})}                                                  phird</Text>
              <Text>Hello Peter</Text>
              <Text color="green"> <div className="peter">Hello Peter parker </div></Text>
              <Text color="green"> <div className="peter">Hello Peter parker eiei  </div></Text>
              <linearGradient></linearGradient>
            </View>
            <View style={styles.section}>
              <Text>World</Text>
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Hello</Text>
              <Text>Hello Peter</Text>
            </View>
            <View style={styles.section}>
              <Text>World</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;