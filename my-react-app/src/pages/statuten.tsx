import React from 'react';
import styles from './statuten.module.scss'




const Statuten: React.FC = () => {
    return(
    <main className={styles.mainContent}>
      <h1 className={styles.statutTitel}>1. Name und Sitz</h1>

       <ul className={styles.statutList}>
            <p className={styles.articleNumber}> Art.1</p>
                <li>Unter dem Namen «Muslim Students’ Association an der Universität St.
                    Gallen» (MSASG) besteht mit Sitz in St. Gallen ein Verein im Sinne von Art. 60
                    ff. des Schweizerischen Zivilgesetzbuches.</li>
        </ul>
       <h1 className={styles.statutTitel}>2. Zweck</h1>
        <ul className={styles.statutList}>
            <p className={styles.articleNumber}> Art.2</p>
                <li><sup>1</sup> Der Verein bezweckt die Förderung von Kontakten zwischen Studierenden
                    islamischen Glaubens an der HSG sowie anderen Studierenden. <br/>
                    <sup>2</sup> Der Verein setzt sich für die Erfüllung der sozialen, pädagogischen, beruflichen
                    und religiösen (spirituellen) Bedürfnisse der muslimischen Studierenden ein
                    und vertritt ihre Interessen an der Universität St. Gallen.</li>
         </ul>
        <h1 className={styles.statutTitel}>3. Mitgliedschaft</h1>
         <ul className={styles.statutList}>
             <p className={styles.articleNumber}> Art.3</p>
                 <li><sup>1</sup> Die Mitgliedschaft steht allen Angehörigen der Universität St. Gallen sowie 
                    weiteren natürlichen Personen offen und setzt sich zusammen aus
                    drei Kategorien, nämlich Aktivmitgliedern, Passivmitgliedern und Ehemalige.<br/>
                    <sup>2</sup> Aktivmitglieder sind jene Mitglieder, welche den jährlichen Mitgliederbeitrag 
                    vollständig einbezahlt haben und sich aktiv in der Organisation
                    beteiligen.<br/>
                    <sup>3</sup> Passivmitglieder sind jene Mitglieder, welche den jährlichen Mitgliederbeitrag 
                    vollständig einbezahlt haben.<br/>
                    <sup>4</sup> Ehemalige sind Mitglieder, die weiterhin mit der MSASG in Kontakt bleiben 
                    und den Verein unterstützen möchten. Ehemalige sind nicht verpflichtet, 
                    den jährlichen Mitgliederbeitrag einzubezahlen.<br/>
                    <sup>5</sup> Innerhalb dieses Rahmens entscheidet der Vorstand über die Mitgliedschaft.</li>
          </ul>
        <h1 className={styles.statutTitel}>4. Austritt und Ausschluss</h1>
           <ul className={styles.statutList}>
               <p className={styles.articleNumber}> Art.4</p>
                   <li><sup>1</sup> Die Mitgliedschaft darf jede im Art. 3 Abs. 1 erwähnte Person erlangen,
                    welche den Mitgliederbeitrag vollständig einbezahlt hat, unabhängig von
                    ihrer politischen oder religiösen Haltung oder Zugehörigkeit.<br/>
                    <sup>2</sup> Die Mitgliedschaft erlischt durch Austritt, Ausschluss oder Nichtbezahlen 
                    des Mitgliederbeitrages.<br/>
                    <sup>3</sup> Bei Austritt oder Ausschluss kann der einbezahlte Mitgliedschaftsbeitrag 
                    nicht rückerstattet werden.<br/>
                    <sup>4</sup> Der Austritt eines Aktivmitglieds kann nur mit einer schriftlichen
                    Erklärung erfolgen.<br/>
                    <sup>5</sup> Ein Passivmitglied darf jederzeit und ohne Auflagen aus dem Verein austreten.<br/>
                    <sup>6</sup> Ein Mitglied kann vom Vorstand ausgeschlossen werden, wenn er gegen
                    das Schweizerische Recht und die guten Sitten verstösst, sowie wider
                    dem Vereinsinteresse handelt.</li>
            </ul>
        <h1 className={styles.statutTitel}>5. Organisation</h1>
            <ul className={styles.statutList}>
                <p className={styles.articleNumber}> Art.5</p>
                    <li><sup>1</sup> Die Organe des Vereins sind:
                        <ul className={styles.articleList}>
                            <li>1. die Vereinsversammlung,</li>
                            <li>2. der Vorstand,</li>
                            <li>3. der Rechnungsrevisor.</li>
                        </ul>   
                        <sup>2</sup> Die Amtsdauer der gewählten Organe beträgt ein Jahr</li>
                <p className={styles.articleNumber}> Art.6</p>
                    <li>Die Vereinsversammlung tritt auf Einladung des Vorstandes mindestens
                        einmal pro Rechnungsjahr zusammen.</li>
                <p className={styles.articleNumber}> Art.7</p>
                    <li><sup>1</sup> Das Stimmrecht in der Vereinsversammlung steht allen Passiv- und
                        Aktivmitgliedern zu.
                        <sup>2</sup> Eine Abstimmung gilt als angenommen, wenn die Mehrheit der Anwesenden 
                        der Abstimmung zugestimmt haben.
                        <sup>3</sup> Die Ehemaligen sind über alle wesentlichen Beschlüsse zu informieren.</li>
                <p className={styles.articleNumber}> Art.8</p>
                    <li><sup>1</sup> In die Zuständigkeit der Vereinsversammlung fallen folgende
                        Geschäfte:
                        <ul className={styles.articleList}>
                            <li>1. Wahl und Entlastung des Vorstandes,</li>
                            <li>2. Wahl des Rechnungsrevisors,</li>
                            <li>3. Abnahme der Jahresrechnung,</li>
                            <li>4. Festsetzung der Mitgliederbeiträge,</li>
                            <li>5. Genehmigung der Revision der Statuten,</li>
                            <li>6. Genehmigung von Ausgaben, welche die Finanzkompetenz des 
                                Vorstandes übersteigen.</li>
                        </ul>
                        <sup>2</sup> Die Vereinsversammlung beschliesst, mit Ausnahme der Bestimmungen
                        von Art. 17 und Art. 18, mit der Mehrheit der abgegebenen Stimmen.
                        </li>
                <p className={styles.articleNumber}> Art.9</p>
                    <li><sup>1</sup> Der Vorstand besteht aus Angehörigen der Universität St. Gallen und
                        sollte mindestens drei Mitglieder haben und aus Vertretern beider Geschlechter 
                        zusammengesetzt sein. Er konstituiert sich selbst.<br/>
                        <sup>2</sup> Tritt ein Vorstandsmitglied zurück oder ist die ordnungsgemässe Geschäftsführung 
                        nicht mehr gewährleistet, so kann sich der Vorstand bis
                        zur nächsten Vereinsversammlung selbst ergänzen.
                        </li>
                <p className={styles.articleNumber}> Art.10</p>
                    <li>Der Vorstand vertritt den Verein nach Aussen, führt die laufenden Geschäfte 
                        und beschliesst in allen Angelegenheiten, die nicht durch die Statuten 
                        oder einen Vorstandsbeschluss der Vereinsversammlung übertragen sind.
                        </li>
                <p className={styles.articleNumber}> Art.11</p>
                    <li>Der / Die Präsident:in und der / die Head of Finance führen Doppelunterschrift. 
                        Der Vorstand kann weitere Zeichnungsberechtigte bestimmen.
                        </li>
                <p className={styles.articleNumber}> Art.12</p>
                    <li>Dem Rechnungsrevisor obliegt die alljährliche Prüfung der Vereinsrechnung, 
                        über die er der Vereinsversammlung Bericht und Antrag stellt.
                        </li>
             </ul>
        <h1 className={styles.statutTitel}>6. Finanz- und Rechnungswesen</h1>
             <ul className={styles.statutList}>
                <p className={styles.articleNumber}> Art.13</p>
                     <li>Das Rechnungsjahr schliesst mit dem 31. März ab.</li>
                <p className={styles.articleNumber}> Art.14</p>
                    <li>Die notwendigen Geldmittel werden zur Hauptsache beschafft durch:
                        <ul className={styles.articleList}>
                            <li>1. Mitgliederbeiträge</li>
                            <li>2. freiwillige Zuwendungen</li>
                            <li>3. Sponsoringbeiträgen</li>
                        </ul>
                    </li> 
                <p className={styles.articleNumber}> Art.15</p>
                    <li>Für die Verbindlichkeiten des Vereins haftet ausschliesslich das Vereinsvermögen.</li>
                <p className={styles.articleNumber}> Art.16</p>
                    <li><sup>1</sup>Die Finanzkompetenz des Vorstandes beträgt für einmalige Ausgaben
                        600 Franken und für wiederkehrende 200 Franken.<br/>
                        <sup>2</sup> Der Mitgliedsbeitrag für das darauffolgende Jahr wird am ersten März
                        erhoben.<br/>
                        <sup>3</sup> Jegliche Ausgaben werden allen Vorstandsmitgliedern vorgelegt.<br/>
                        <sup>4</sup> Wird die Finanzkompetenz überschritten, müssen die Ausgaben von der
                        Vereinsversammlung genehmigt werden.</li>
                </ul>
        <h1 className={styles.statutTitel}>7. Schlussbestimmungen</h1>
        <ul className={styles.statutList}>
                <p className={styles.articleNumber}> Art.17</p>
                    <li>Für die Änderung dieser Statuten ist die Zustimmung der Mehrheit der
                        anwesenden Aktiv- und Passivmitglieder sowie die Genehmigung durch
                        die HSG erforderlich.</li>
                <p className={styles.articleNumber}> Art.18</p>
                    <li>Für die Auflösung des Vereins bedarf es einer Zweidrittelmehrheit der
                        anwesenden Aktiv- und Passivmitglieder. Der Vorstand oder eine von ihm
                        ernannte Kommission besorgt in diesem Fall die Liquidation und bestimmt 
                        über die Verwendung des Erlöses im Rahmen des Vereinszweckes.</li>
                <p className={styles.articleNumber}> Art.19</p>
                    <li><sup>1</sup> Diese Statuten sind durch den Senatsausschuss der Universität St. Gallen 
                            am 22./23 Juni 2023 genehmigt worden und am 22./23 Juni 2023 in
                        Kraft getreten.<br/>
                        <sup>2</sup> Durch das Ausfüllen des Anmeldeformulars auf der Website und anschliessender 
                        Prüfung durch den Vorstand wird die Mitgliedschaft der
                        Muslim Students’ Association an der Universität St. Gallen begründet.</li>
              </ul>
        </main>
    );
};
export default Statuten;

