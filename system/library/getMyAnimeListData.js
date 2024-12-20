const cheerio = require("cheerio");
const request = require("request");

function getMyAnimeListData(command){
    let url = `https://myanimelist.net/topanime.php?type=${command}`;
    return new Promise((resolve, reject) => {
        let data = [];
        request(url, (err, res, html) => {
            if (err || res.statusCode != 200) reject("Error");
            let $ = cheerio.load(html);
            let title = $("#content > div.pb12 > h2 ").find("span").remove().end().text();
            data.push(`<<< ${title} >>>\n`);
            $("#content > div.pb12 > table > tbody > tr:nth-child(n+2)").each(function () {
                let link = $(this).find("td.title.al.va-t.word-break > div > div.di-ib.clearfix a[href]").attr("href");
                let score = $(this).find("td.score.ac.fs14 > div > span").text();
                let position = $(this).find("td.rank.ac > span").text();
                let name = $(this).find("td.title.al.va-t.word-break > div > div.di-ib.clearfix")
                    .text()
                    .replace("Watch Episode Video", "")
                    .replace("Watch Promotional Video", "");
                data.push(`${position} ° - ${name} |${score}| [view more](${link})`);
                resolve(data);
            });
        });
    });
}

module.exports = getMyAnimeListData;