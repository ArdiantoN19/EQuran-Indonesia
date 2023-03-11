const baseURL = "https://equran.id";

const getAllSurah = async () => {
  const response = await fetch(`${baseURL}/api/v2/surat`);
  const responseJSON = await response.json();

  const { code, message, data } = await responseJSON;

  if (code !== 200) {
    return console.log(message);
  }

  return data;
};

const getDetailSurah = async (nomor) => {
  const response = await fetch(`${baseURL}/api/v2/surat/${nomor}`);
  const responseJSON = await response.json();

  const { code, message, data } = await responseJSON;
  if (code !== 200) {
    return console.log(message);
  }

  return data;
};

const getDetailTafsir = async (nomor) => {
  const response = await fetch(`${baseURL}/api/v2/tafsir/${nomor}`);
  const responseJSON = await response.json();

  const { code, message, data } = await responseJSON;
  if (code !== 200) {
    return console.log(message);
  }

  return data;
};

export { getAllSurah, getDetailSurah, getDetailTafsir };
