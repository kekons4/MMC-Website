            <Container maxWidth="xl">
                <Grid container spacing={2} sx={{display: 'flex', alignItems: "start", justifyContent: "center"}}>
                    <Grid item xs={12} sm={12} md={5} sx={{backgroundColor: "white", borderRadius: "5px", padding: "20px"}}>
                        <Typography variant='h4' color="black" sx={{marginBottom: "40px", fontFamily: "Cabin"}}>Our <span className={classes.consulting}>Mission</span></Typography>
                        <Typography variant="p" align='center' color="textPrimary" sx={{fontSize: "18px"}}>
                            Materials and Manufacturing Consulting (MM<span className={classes.consulting}>C</span>) was founded to help manufacturing companies with their materials (e.g., aluminum alloys, advanced high strength steels, polymer composites, etc.), and forming problems (e.g., tearing, spring-back, wrinkling). As of today, MM<span className={classes.consulting}>C</span> has helped many automotive and aerospace companies by providing materials solutions for their problems with manufacturing processes such as stamping, tube hydroforming, incremental sheet forming, forging, rolling, additive manufacturing, and compression modeling. MM<span className={classes.consulting}>C</span> has expertise related to static and dynamic properties of metals and polymer composites, at room and elevated temperatures. Engineers at MM<span className={classes.consulting}>C</span> are experienced in using commercial finite element analysis (FEA) codes (e.g., Abaqus, LS-Dyna, Deform, Ansys, and Digimat), deploying advanced material models (e.g., Barlat yield functions, viscoelasticity, viscoplasticity, crystal plasticity, GTN, etc.), as well as implement new material models using the UMAT option.
                        </Typography>
                    </Grid>
                    <Grid item xs={9} sm={9} md={4} sx={{marginLeft: {xs: "0rem", sm: "0rem", md: "4rem"}, backgroundColor: "white", height: "50%", padding: "1rem", borderRadius: "5px", marginTop: {xs: "2rem", sm: "2rem", md: "0rem"}}}>
                        <img src="../images/dr-pourboghrat-hero-img.jpg" alt="image of materials and manufactoring work examples" style={{width: "100%", height: "auto", borderRadius: "5px"}} />
                        <Typography variant='p'>Dr. Pourboghrat chatting with Colleagues</Typography>
                    </Grid>
                    <Grid item xs={9} sm={9} md={4} sx={{marginLeft: {xs: "0rem", sm: "0rem", md: "0rem"}, backgroundColor: "white", height: "50%", padding: "1rem", borderRadius: "5px", marginTop: {xs: "2rem", sm: "2rem", md: "2rem"}}}>
                        <img src="../images/fpourWhiteHouse.JPG" alt="image of materials and manufactoring work examples" style={{width: "100%", height: "auto", borderRadius: "5px"}} />
                        <Typography variant='p'>Dr. Pourboghrat at the White House</Typography>
                    </Grid>
                    <Grid item xs={9} sm={9} md={4} sx={{marginLeft: {xs: "0rem", sm: "0rem", md: "4rem"}, backgroundColor: "white", height: "50%", padding: "1rem", borderRadius: "5px", marginTop: {xs: "2rem", sm: "2rem", md: "2rem"}}}>
                        <img src="../images/ise-research-day.jpg" alt="image of materials and manufactoring work examples" style={{width: "100%", height: "auto", borderRadius: "5px"}} />
                        <Typography variant='p'>The Ohio State University ISE research Day</Typography>
                    </Grid>
                    {/* <Grid item xs={9} sm={9} md={7.2} sx={{ backgroundColor: "white", height: "50%", padding: "0rem", borderRadius: "5px", marginTop: {xs: "2rem", sm: "2rem", md: "4rem"}, display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <video controls style={{width: "100%", maxHeight: "100%", paddingRight: "10px"}}>
                            <source src="../videos/hero-video.mp4" type="video/mp4" />
                        </video>
                        <Typography variant='p' className={classes.heroCaption}>Dr. Pourboghrat explains the <a href='#stamping' className={classes.consulting}>Stamping</a> process</Typography>
                    </Grid> */}
                </Grid>
            </Container>