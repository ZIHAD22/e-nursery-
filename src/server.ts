import app from "./app";
import { PORT } from "./App/config";

app.listen(PORT, () => {
  console.log(`server is running on http://locahost/${PORT}`);
});
