

function App() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        document.title = 'PremierZone Fantasy';

        const generateFetchUrl = () => {
            let baseUrl = 'http://localhost:8080/api/v1/player';
            const queryParams = new URLSearchParams(location.search);

            if(queryParams.toString()) {
                baseUrl += `?${queryParams.toString()}`;
            }

            return baseUrl;
        };

        const fetchPlayers = async () => {
            try {
                const response = await fetch(generateFetchUrl());
                const data = await response.json();
                setPlayers(data);
            } catch(error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, [location]);

    return(
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="teams" element={<Teams />}/>
                <Route path="data" element={<TeamData />}/>
                <Route path="nation" element={<Nation />}/>
                <Route path="position" element={<Position />}/>
                <Route path="search" element={<Search />}/>

            </Route>
        </Routes>
    </>
    );
}

export default App;