<template>
  <section>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs value="annual-reports">
            <TabList class="mb-12">
                <Tab value="annual-reports">Annual Report</Tab>
                <Tab value="annual-report-collateral">Annual Report Collateral</Tab>
                <Tab value="event-and-presentation">Event and Presentation</Tab>
                <Tab value="policies">Policies</Tab>
            </TabList>

            <TabPanels>
                <TabPanel value="annual-reports">
                    <div class="reports-accordion-wrapper">
                      <Accordion value="">
                          <AccordionPanel value="2024">
                              <AccordionHeader>Annual Reports 2024</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <a href="/reports/flourmill-report-31-10-24.pdf" download class="report-document">
                                        <span>2024 Annual Report & Accounts</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2024/agm/FMN+AGM+2024+Notice.pdf" download class="report-document">
                                        <span>Notice of AGM 2024</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2024/agm/Proxy+Form+-+FMN+Scheme+Document.pdf" download class="report-document">
                                        <span>Proxy Form - AGM 2024</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>

                          <AccordionPanel value="2023">
                              <AccordionHeader>Annual Reports 2023</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2023/FMN+2023_INNER+DESIGN_ADJUST_NEW_FINAL_REDUCED.pdf" download class="report-document">
                                        <span>2023 Annual Report & Accounts</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2023/AGM+FMN+2023+v3.pdf" download class="report-document">
                                        <span>Notice of AGM 2023</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://docs.google.com/document/d/1Mr8T4Xf13Y91UZ1hdRA2lj6lcfKZnu45/edit?usp=drive_link" download class="report-document">
                                        <span>Proxy Form - AGM 2023</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>

                          <AccordionPanel value="2022">
                              <AccordionHeader>Annual Reports 2022</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2022/FMN+Annual+Report+2022.pdf" download class="report-document">
                                        <span>2022 Annual Report & Accounts</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2022/Notice+of+AGM+2022.pdf" download class="report-document">
                                        <span>Notice of AGM 2022</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2022/AGM+Proxy+Form+2022+.pdf" download class="report-document">
                                        <span>Proxy Form - AGM 2022</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>

                          <AccordionPanel value="2021">
                              <AccordionHeader>Annual Reports 2021</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2021/FMN Annual Report_31_Aug_21.pdf" download class="report-document">
                                        <span>2021 Annual Report & Accounts</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2021/Notice of AGM_2021.pdf" download class="report-document">
                                        <span>Notice of AGM 2021</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2021/Proxy Form - AGM 2021 - final.pdf" download class="report-document">
                                        <span>Proxy Form - AGM 2021</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>

                          <AccordionPanel value="2020">
                              <AccordionHeader>Annual Reports 2020</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Annual Reports 2020/FMN_Annual_Report_2020_Web_Version2.pdf" download class="report-document">
                                        <span>2020 Annual Report & Accounts</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Annual Reports 2020/Full year FY20 Investors and Analyst Presentation 03.08.20.pdf" download class="report-document">
                                        <span>Full year FY20 Investors and Analyst Presentation - 03.08.20</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Annual Reports 2020/Notice of AGM 2020.pdf" download class="report-document">
                                        <span>Notice of AGM 2020</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Annual Reports 2020/Proxy Form - AGM 2020 - final_.pdf" download class="report-document">
                                        <span>Proxy Form - AGM 2020</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>

                          <AccordionPanel value="before-2020">
                              <AccordionHeader>Annual Reports - Before 2020</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <div class="font-bold text-gray-700 dark:text-gray-300 mt-2">2019</div>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Annual Reports/2019 Audited Financial Statements.pdf" download class="report-document">
                                        <span>2019 Audited Financial Statements</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>

                                    <div class="font-bold text-gray-700 dark:text-gray-300 mt-2">2018</div>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Annual Reports/2018 Audited Financial Statements.pdf" download class="report-document">
                                        <span>2018 Audited Financial Statements</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>

                                    <div class="font-bold text-gray-700 dark:text-gray-300 mt-2">2017</div>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Annual Reports/2017 Audited Financial Statements.pdf" download class="report-document">
                                        <span>2017 Audited Financial Statements</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>

                                    <div class="font-bold text-gray-700 dark:text-gray-300 mt-2">2016</div>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Financial Results/Annual Reports/2016 Audited Financial Statements.pdf" download class="report-document">
                                        <span>2016 Audited Financial Statements</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>

                          <AccordionPanel value="quarterly">
                              <AccordionHeader>Quarterly Reports</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <div class="font-bold text-gray-700 dark:text-gray-300 mt-2">2024</div>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2024/FMN+Plc+Q1+report+-+June+2024.pdf" download class="report-document">
                                        <span>Q1 Unaudited Financial Statements</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>

                                    <div class="font-bold text-gray-700 dark:text-gray-300 mt-2">2023</div>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2023/Q1+Jun+2023+SEC+Report.pdf" download class="report-document">
                                        <span>Q1 Unaudited Financial Statements</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2023/Q2+Sep+2023+SEC+Report.pdf" download class="report-document">
                                        <span>Q2 Unaudited Financial Statements</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2023/FMN+Q3+2023+FINANCIAL+STATEMENT.pdf" download class="report-document">
                                        <span>Q3 Unaudited Financial Statements</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>
                      </Accordion>
                    </div>
                </TabPanel>
                <TabPanel value="annual-report-collateral">
                    <div class="reports-accordion-wrapper">
                      <Accordion value="">
                          <AccordionPanel value="2024">
                              <AccordionHeader>2024 Annual Report Collaterals</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2024/agm/FMN+AGM+2024+Notice.pdf" download class="report-document">
                                        <span>Notice of AGM 2024</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2024/agm/Proxy+Form+-+FMN+Scheme+Document.pdf" download class="report-document">
                                        <span>Proxy Form - AGM 2024</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2024/agm/FMN+e-mandate+form.jpg" download class="report-document">
                                        <span>2024 AGM E-mandate form</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2024/agm/FMN+data+update+form.xlsx" download class="report-document">
                                        <span>2024 AGM shareholders data update form</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://docs.google.com/spreadsheets/d/1O4ZuBm2s3Pj7klsZSORaqayyYzqvOnic/edit?usp=drive_link" download class="report-document">
                                        <span>2023 FMN Unclaimed Dividend List</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>

                          <AccordionPanel value="agm">
                              <AccordionHeader>Annual General Meetings</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <NuxtLink href="/agm-2023-live" target="_blank" class="report-document">
                                        <span>AGM 2023</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </NuxtLink>
                                    <NuxtLink href="/agm-2022-live" target="_blank" class="report-document">
                                        <span>AGM 2022</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </NuxtLink>
                                    <NuxtLink href="/agm-2021-live" target="_blank" class="report-document">
                                        <span>AGM 2021</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </NuxtLink>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>
                      </Accordion>
                    </div>
                </TabPanel>
                <TabPanel value="event-and-presentation">
                    <div class="reports-accordion-wrapper">
                      <Accordion value="">
                          <AccordionPanel value="2024">
                              <AccordionHeader>Events and Presentations 2024</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <!-- <div class="font-bold text-gray-700 dark:text-gray-300 mt-2">Analyst Presentations</div> -->
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2024/Q125+Results+Presentation.pdf" download class="report-document">
                                        <span>Flour Mills of Nigeria Plc Q1'25 Result Presentation</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2024/FY+202324+Results+Presentation+-+Final.pdf" download class="report-document">
                                        <span>Flour Mills of Nigeria Plc Q4'24 & Full Year Results</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>

                          <AccordionPanel value="2023">
                              <AccordionHeader>Events and Presentations 2023</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <!-- <div class="font-bold text-gray-700 dark:text-gray-300 mt-2">Analyst Presentations</div> -->
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2023/FMN+Q3'24+IR+Presentation+-+Final.pdf" download class="report-document">
                                        <span>Flour Mills of Nigeria Q3'24 Investor Presentation</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2023/Flour+Mills+of+Nigeria+H1'24+Investors+Presentation+-+29-10-2023.pdf" download class="report-document">
                                        <span>Flour Mills of Nigeria H1'24 Investor Presentation</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2023/Flour+Mills+of+Nigeria+FY'23+and+Q1'24+Result+-+090823+Draft.pdf" download class="report-document">
                                        <span>Flour Mills of Nigeria FY'23 and Q1'24 Results</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2023/Q1+30+JUNE+2023+-+FinancialStatementFull.pdf" download class="report-document">
                                        <span>Flour Mills of Nigeria Q1'24 Results</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>

                          <AccordionPanel value="2022">
                              <AccordionHeader>Events and Presentations 2022</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <!-- <div class="font-bold text-gray-700 dark:text-gray-300 mt-2">Analyst Presentations</div> -->
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2022/Flour+Mills+of+Nigeria+Plc+H1'23+Investor+Presentation.pdf" download class="report-document">
                                        <span>Flour Mills of Nigeria H1'22 Results</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/2022/Flour+Mills+of+Nigeria+Q1'22+Results_.pdf" download class="report-document">
                                        <span>Flour Mills of Nigeria Q1'22 Results</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>
                      </Accordion>
                    </div>
                </TabPanel>
                <TabPanel value="policies">
                    <div class="reports-accordion-wrapper">
                      <Accordion value="">
                          <AccordionPanel value="policies">
                              <AccordionHeader>Policies</AccordionHeader>
                              <AccordionContent>
                                  <div class="flex flex-col gap-3 pt-3 pb-3">
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Policies/01 Food Safety Policy Statement.pdf" download class="report-document">
                                        <span>Food Safety Policy Statement</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Policies/02 Quality Policy Statement.pdf" download class="report-document">
                                        <span>Quality Policy</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Policies/Sustainability Policy- revised.pdf" download class="report-document">
                                        <span>Flour Mills of Nig. Plc - Sustainability Policy</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Policies/FMN Corporate Communications Policy.pdf" download class="report-document">
                                        <span>FMN Corporate Communications Policy</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Policies/FMN RESPONSIBLE BUSINESS PARTNER POLICY[2].pdf" download class="report-document">
                                        <span>FMN Responsible Business Partner Policy</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Policies/FMN SHAREHOLDERS' ENGAGEMENT POLICY.pdf" download class="report-document">
                                        <span>FMN Shareholders' Engagement Policy</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Policies/SECURITIES TRADING POLICY OF FLOUR MILLS OF NIGERIA PLC ADJUSTED.pdf" download class="report-document">
                                        <span>Securities Trading Policy Of Flour Mills of Nigeria PLC</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                    <a href="https://flourmills.s3.eu-central-1.amazonaws.com/reports/Policies/WHISTLE BLOWING POLICY.pdf" download class="report-document">
                                        <span>Whistle Blowing Policy</span>
                                        <img src="@/assets/images/download-icon.svg" alt="download" class="download-icon">
                                    </a>
                                  </div>
                              </AccordionContent>
                          </AccordionPanel>
                      </Accordion>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
      </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style>
a.report-document {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-bold);
    width: 90%;
    margin: auto;
    border-radius: 8px;
    border: 1px solid rgba(235, 235, 235, 1);
    border-left: 6px solid var(--pry-color);
    padding: 28px;
    padding-left: 40px;
    background-color: white;
    color: rgba(75, 85, 99, 1);
}
.dark-mode a.report-document {
    background-color: black;
    color: white;
    border: 1px solid rgba(235, 235, 235, 0.2);
    border-left: 6px solid var(--pry-color);
}

@media(max-width: 640px) {
    a.report-document {
        width: 100%;
    }
}
</style>