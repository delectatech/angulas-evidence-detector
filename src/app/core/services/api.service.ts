import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';
import { Observable, of } from 'rxjs';
import { DatatablesAdapterService } from '../common/datatables-adapter.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API_URL = environment.apiUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly dtAdapter: DatatablesAdapterService
  ) {}

  loadList(data: TableLazyLoadEvent | null): Observable<any> {
    if (!data) {
      // Return observable of empty array if no data is provided
      return of({
        start: 0,
        recordsTotal: 0,
        recordsFiltered: 0,
        data: [],
      });
    }
    return of({
    "data": [
        {
            "_id": "66cc77685ba99d01c76edf4b",
            "restaurantUidentifier": "710fdf709498da314f4982c289e6572b7f5d6d78",
            "name": "Uncle Ped's British Pub",
            "streetAddress": "c. derramador",
            "numberAddress": null,
            "provinceName": "Alicante",
            "regionName": "Comunitat Valenciana",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99999,
            "evidences": {
                "images": {
                    "total_images": 78,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c93f3f",
                            "image_url": "https://imagevault.delectame.com/md5/a70d3dec87bb3ba9c6a1c6d6b6251a56",
                            "date": "2023-05-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f40",
                            "image_url": "https://imagevault.delectame.com/md5/94ca112a7844513499d640927bf212d4",
                            "date": "2023-09-21",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f41",
                            "image_url": "https://imagevault.delectame.com/md5/a7931d804ccaa773ff88000934b551af",
                            "date": "2024-06-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f42",
                            "image_url": "https://imagevault.delectame.com/md5/cd9021519500b26d90f7b8112a8826a0",
                            "date": "2024-04-21",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f43",
                            "image_url": "https://imagevault.delectame.com/md5/193849d2b1674dfc84cf2f287312b18a",
                            "date": "2024-04-05",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f44",
                            "image_url": "https://imagevault.delectame.com/md5/af5ceb42356912af7655b993117e3e0d",
                            "date": "2023-09-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f45",
                            "image_url": "https://imagevault.delectame.com/md5/7fa4ddb8a6f3e934e8362214d51bf20a",
                            "date": "2023-08-06",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f46",
                            "image_url": "https://imagevault.delectame.com/md5/07d0a131b47b7b4ad707964d4428dec7",
                            "date": "2024-01-05",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f47",
                            "image_url": "https://imagevault.delectame.com/md5/69a04527be7f6b68e9b581e54319b408",
                            "date": "2024-01-01",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f48",
                            "image_url": "https://imagevault.delectame.com/md5/33bb4f74a4b83eb7096dfb094176b295",
                            "date": "2023-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f49",
                            "image_url": "https://imagevault.delectame.com/md5/bbee2b3e45fd8a413be05401864ab6ea",
                            "date": "2023-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f4a",
                            "image_url": "https://imagevault.delectame.com/md5/f5b1c004af22189dea13fe63db39f1ec",
                            "date": "2023-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f4b",
                            "image_url": "https://imagevault.delectame.com/md5/38c7cb9de4f0a4df64a62874d336e4c2",
                            "date": "2023-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f4c",
                            "image_url": "https://imagevault.delectame.com/md5/6b348a77e40f1303012aed07c2e90c80",
                            "date": "2023-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f4d",
                            "image_url": "https://imagevault.delectame.com/md5/d410259e5162d5a0d043af57445fa8c8",
                            "date": "2023-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f4e",
                            "image_url": "https://imagevault.delectame.com/md5/a2d66a3e73c63d90deb36dff1cc1d812",
                            "date": "2023-08-02",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f4f",
                            "image_url": "https://imagevault.delectame.com/md5/48dfead99b5ac29ad2104a51fffb0c8c",
                            "date": "2023-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f50",
                            "image_url": "https://imagevault.delectame.com/md5/8aab1b1fc74b26546e57dafd73a1ecc4",
                            "date": "2023-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f51",
                            "image_url": "https://imagevault.delectame.com/md5/f60d8d05f3ad35960b31f1cdeaa933bd",
                            "date": "2023-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f52",
                            "image_url": "https://imagevault.delectame.com/md5/c8fde6d13d828cd8321de4a8a0de1c45",
                            "date": "2023-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f53",
                            "image_url": "https://imagevault.delectame.com/md5/a4431e825492483de6fef4b732e82806",
                            "date": "2023-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f54",
                            "image_url": "https://imagevault.delectame.com/md5/a74a279a53ad93497c8bb8de6679e2b8",
                            "date": "2023-06-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f55",
                            "image_url": "https://imagevault.delectame.com/md5/65714bccccb72f8972f5a819aa820b66",
                            "date": "2023-05-22",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f56",
                            "image_url": "https://imagevault.delectame.com/md5/1e5984de7310c5acf3a688c2ff309137",
                            "date": "2023-04-11",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f57",
                            "image_url": "https://imagevault.delectame.com/md5/070ace45e9ff52b519d2ae56a31e7de4",
                            "date": "2024-02-22",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f58",
                            "image_url": "https://imagevault.delectame.com/md5/6526d91f8bd799566cc0ac2fe4ac0e78",
                            "date": "2024-02-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f59",
                            "image_url": "https://imagevault.delectame.com/md5/03e777e824a4c7252a1813e281407efb",
                            "date": "2024-02-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f5a",
                            "image_url": "https://imagevault.delectame.com/md5/af24d18245e97cff41c14d07ac7cc740",
                            "date": "2024-02-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f5b",
                            "image_url": "https://imagevault.delectame.com/md5/fb4b5327463d312c668b0c8a9936ca54",
                            "date": "2024-02-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f5c",
                            "image_url": "https://imagevault.delectame.com/md5/5b9bb83ce9996171d705943a99b21d72",
                            "date": "2024-02-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f5d",
                            "image_url": "https://imagevault.delectame.com/md5/d37f724262feab1f73570b69da9e4a65",
                            "date": "2023-12-17",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f5e",
                            "image_url": "https://imagevault.delectame.com/md5/e7045108718f47f13e3b8f2cb11a028d",
                            "date": "2023-03-31",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f5f",
                            "image_url": "https://imagevault.delectame.com/md5/78db779746e11c6f49a9db36c0988fca",
                            "date": "2023-11-05",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f60",
                            "image_url": "https://imagevault.delectame.com/md5/8d030d8bb42e548be79b15ab97da3117",
                            "date": "2023-12-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f61",
                            "image_url": "https://imagevault.delectame.com/md5/cf11e4421bd3c3bf7c8af43fe8ca38b4",
                            "date": "2023-12-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f62",
                            "image_url": "https://imagevault.delectame.com/md5/5fe1d5c4c4b55e90b4f94f61e2eb12cc",
                            "date": "2023-12-17",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f63",
                            "image_url": "https://imagevault.delectame.com/md5/bb51f5b4de3c420ef12b6b876add5bf8",
                            "date": "2023-12-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f64",
                            "image_url": "https://imagevault.delectame.com/md5/1d246cff4845bf74a8302e648c4c1876",
                            "date": "2024-03-12",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f65",
                            "image_url": "https://imagevault.delectame.com/md5/b7210316bd81d0265222277debaab45a",
                            "date": "2023-10-10",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f66",
                            "image_url": "https://imagevault.delectame.com/md5/be382501780ea8608b2f42d035dfb50f",
                            "date": "2023-03-21",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f67",
                            "image_url": "https://imagevault.delectame.com/md5/7b2114f95c371c851b7e4f75930f2c45",
                            "date": "2023-09-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f68",
                            "image_url": "https://imagevault.delectame.com/md5/b6e9d05543b05c901959e0f70833581f",
                            "date": "2023-09-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f69",
                            "image_url": "https://imagevault.delectame.com/md5/196fe6640ba7dfad47c999c88f19c742",
                            "date": "2023-03-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f6a",
                            "image_url": "https://imagevault.delectame.com/md5/f075f7bc78e841da895235c6d54e3037",
                            "date": "2023-09-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f6b",
                            "image_url": "https://imagevault.delectame.com/md5/9a932e0aaa14fbb8d038714dbc54dda9",
                            "date": "2023-09-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f6c",
                            "image_url": "https://imagevault.delectame.com/md5/7db1a1026bf94c298c9d409ea2c1bf13",
                            "date": "2023-09-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f6d",
                            "image_url": "https://imagevault.delectame.com/md5/e62ae54caa85f507a7376d7a5b342021",
                            "date": "2023-09-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f6e",
                            "image_url": "https://imagevault.delectame.com/md5/c8104e79017265bce5030c78b8db1e5a",
                            "date": "2023-09-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f6f",
                            "image_url": "https://imagevault.delectame.com/md5/ce7e7ce39427ab9b8bee9915d86fc030",
                            "date": "2023-09-07",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f70",
                            "image_url": "https://imagevault.delectame.com/md5/b6213432ae25ac6d8d65beb049ad660a",
                            "date": "2023-09-02",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f71",
                            "image_url": "https://imagevault.delectame.com/md5/17cacef4ac3d9c7e50a6f6151fbbda59",
                            "date": "2023-09-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f72",
                            "image_url": "https://imagevault.delectame.com/md5/ff6205f4cd85b04a669181754236cea1",
                            "date": "2023-09-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f73",
                            "image_url": "https://imagevault.delectame.com/md5/b0c4a2429411fdd28135db3853592ea2",
                            "date": "2023-09-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f74",
                            "image_url": "https://imagevault.delectame.com/md5/e2a00c1a78b9a930f296ffcd27b12267",
                            "date": "2023-07-29",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f75",
                            "image_url": "https://imagevault.delectame.com/md5/57e009db1ff14a8ac9ff91e9a0506b3b",
                            "date": "2023-02-26",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f76",
                            "image_url": "https://imagevault.delectame.com/md5/fe06af58e0f2e14b4be3d0b82a1c9996",
                            "date": "2023-07-14",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f77",
                            "image_url": "https://imagevault.delectame.com/md5/cd327083ee541eb954445470d76b39d2",
                            "date": "2023-07-13",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f78",
                            "image_url": "https://imagevault.delectame.com/md5/6127a0bde0f33ca58967055eb443b663",
                            "date": "2023-07-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f79",
                            "image_url": "https://imagevault.delectame.com/md5/83184db4ea3a21b93cad30c5c26e25ba",
                            "date": "2023-08-09",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f7a",
                            "image_url": "https://imagevault.delectame.com/md5/3e64d828f2b43404e17a6bea3d82d27f",
                            "date": "2023-06-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f7b",
                            "image_url": "https://imagevault.delectame.com/md5/ba375ee99e65ff69a9bb820956e1d103",
                            "date": "2023-05-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f7c",
                            "image_url": "https://imagevault.delectame.com/md5/35a14890ff7d7346cde06cb309961038",
                            "date": "2022-12-25",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f7d",
                            "image_url": "https://imagevault.delectame.com/md5/50869aed2c4f494ac72d5e838f7e94e7",
                            "date": "2022-12-25",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f7e",
                            "image_url": "https://imagevault.delectame.com/md5/cb829123c826e83c3e0bfcf887381b57",
                            "date": "2022-12-01",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f7f",
                            "image_url": "https://imagevault.delectame.com/md5/02aa79360c7d3e13e4147f54a508ada1",
                            "date": "2022-12-01",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f80",
                            "image_url": "https://imagevault.delectame.com/md5/ef05d60971f1b3010586ddd55ec318ca",
                            "date": "2022-12-01",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f81",
                            "image_url": "https://imagevault.delectame.com/md5/f05d5aefe9a521bf698d0bdab0fcf52b",
                            "date": "2022-10-31",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f82",
                            "image_url": "https://imagevault.delectame.com/md5/5e705c1391cc3281cf3ed204aa94574b",
                            "date": "2022-10-25",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f83",
                            "image_url": "https://imagevault.delectame.com/md5/7cd6881e5611a202774afc72ff1a9b9e",
                            "date": "2022-10-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f84",
                            "image_url": "https://imagevault.delectame.com/md5/d9f4ad6699db6d945acbdb84acf1ffc8",
                            "date": "2022-10-14",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f85",
                            "image_url": "https://imagevault.delectame.com/md5/aa4ddef6578d83d8090c10f5c488ab65",
                            "date": "2022-10-09",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f86",
                            "image_url": "https://imagevault.delectame.com/md5/dd32b6cbe1975a0bb59005934fb8732d",
                            "date": "2022-10-09",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f87",
                            "image_url": "https://imagevault.delectame.com/md5/875329916b3bc02f7218d6481915230f",
                            "date": "2022-10-09",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f88",
                            "image_url": "https://imagevault.delectame.com/md5/45a753c8ba5755209b1b2afb2d7312f9",
                            "date": "2022-10-09",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f89",
                            "image_url": "https://imagevault.delectame.com/md5/95b3f2bdb062fae458677f2fa8c3891f",
                            "date": "2022-10-09",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f8a",
                            "image_url": "https://imagevault.delectame.com/md5/634a10d7545f4e3777641b2abf4efbe1",
                            "date": "2022-10-09",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f8b",
                            "image_url": "https://imagevault.delectame.com/md5/9db98bf72b3735da8d8de42240c227f6",
                            "date": "2022-09-17",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f8c",
                            "image_url": "https://imagevault.delectame.com/md5/f10efd4ccbff52324427ed4d72c19f59",
                            "date": "2022-09-17",
                            "label": "tv with soccer"
                        }
                    ],
                    "soccer_images_count": 26,
                    "_id": "68646fe29b544de5c5c93f8d"
                },
                "comments": {
                    "total_comments": 12,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c93f8e",
                            "comment_text": "Great service, and cheap drinks, very large inside with lot's of tv's making this the perfect place to watch sport, very good nightly entertainment too",
                            "date": "2023-02-14",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f8f",
                            "comment_text": "Popped in to uncle peds yesterday for a pint or 2 \n\nThe terrace was very busy but managed to find a seat in the sun great place to spend an hour or two there is a large screen on the terrace perfect for watching sports.\n\nThe terrace was a sun trap ",
                            "date": "2023-02-06",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f90",
                            "comment_text": "Great time with family. Good to watch the sports.",
                            "date": "2023-02-28",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f91",
                            "comment_text": "Visited with friends cheap drinks we watched the footy in there so there was no entertainment, toilets are not the cleanest and no seats on loo",
                            "date": "2023-03-01",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f92",
                            "comment_text": "Great pub good for watching sports. Reasonable prices",
                            "date": "2023-04-09",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f93",
                            "comment_text": "Great place to go, see Pablo Bloom and have a pint at €1.50 at the same time. Loads of TVs to watch the sport. Best value pub in Benidorm. Good times for the family at a very reasonable price. This place gets very busy so if you want too see an act you like it's best to get there early.",
                            "date": "2023-06-02",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f94",
                            "comment_text": "Went here to have a few drinks to watch the match very few people here well ventilated area and loads of tvs beer was 1.50 a pint cant complain",
                            "date": "2023-08-29",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f95",
                            "comment_text": "Great prices!! Nice place to start without it being too noisy.  Show’s football on large screens.",
                            "date": "2023-09-05",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f96",
                            "comment_text": "Good place to watch the football beer is reasonable price as well",
                            "date": "2023-10-06",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f97",
                            "comment_text": "Uncle Peds is a must if you want cheap drinks and a good night out in Benidorm without any hassle, they put on some good shows as well, Tvs as well to watch the sport if that's your thing.",
                            "date": "2023-12-03",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f98",
                            "comment_text": "Met family here as they were also visiting Benidorm. It was busy as people were watching football. Prices are very reasonable and service at the bar is quick. Looking at the prices on the walls all drinks and food are well within anyone's price range or budget.",
                            "date": "2024-01-13",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f99",
                            "comment_text": "Great to watch all the matches today. Nice food and cheap beer. Definitely recommend this place! ????????",
                            "date": "2024-03-09",
                            "label": "sports_comment"
                        }
                    ],
                    "soccer_comments_count": 4,
                    "_id": "68646fe29b544de5c5c93f9a"
                },
                "tags": [
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c93f9b"
            },
            "cityUid": "9a3bc8257e8bc4d4849ef22a81cf5c925d5d4cff",
            "provinceUid": "c1c486e58d8b238ab1075e0a8bd1fd61f46c1254",
            "regionUid": "71dee81e4b525f876739781dcd1e612b46f0d9d3",
            "postalCodeUid": "86b238814e7ce0225c796e180f8f166f77b250dc",
            "provinceNameNormalized": "alicante",
            "nameNormalized": "uncleped'sbritishpub",
            "links": {
                "tripAdvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g187525-d6582382-Reviews-Uncle_Peds-Benidorm_Costa_Blanca_Province_of_Alicante_Valencian_Community.html",
                "googleUrl": "https://maps.google.es/?cid=13894429206062981547",
                "elTenedorUrl": null,
                "facebookUrl": null,
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf4a",
            "restaurantUidentifier": "167bd01f5179b20c39b3a7ffa753014bc9085c18",
            "name": "Al Rouche Restaurante & Cafe",
            "streetAddress": "moll d'espanya n5 local 207",
            "numberAddress": "5",
            "provinceName": "Barcelona",
            "regionName": "Cataluña",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99999,
            "evidences": {
                "images": {
                    "total_images": 39,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c93f9c",
                            "image_url": "https://imagevault.delectame.com/md5/ed2210707dfc2a4998db41023ebc840f",
                            "date": "2023-11-22",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f9d",
                            "image_url": "https://imagevault.delectame.com/md5/ac673535442941189e2c1c49efc74d72",
                            "date": "2023-11-21",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f9e",
                            "image_url": "https://imagevault.delectame.com/md5/669bd201586969f55569d42036802496",
                            "date": "2023-11-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93f9f",
                            "image_url": "https://imagevault.delectame.com/md5/7436474c603d817d9cf39a73f0bce32a",
                            "date": "2023-11-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fa0",
                            "image_url": "https://imagevault.delectame.com/md5/3b1e10c50f511ba41dcf10f4ebfa3429",
                            "date": "2023-10-01",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fa1",
                            "image_url": "https://imagevault.delectame.com/md5/2be712175144dad8dccfe8a714767ca9",
                            "date": "2023-06-23",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fa2",
                            "image_url": "https://imagevault.delectame.com/md5/c3a22e39850846b7c3723e03edc3aac2",
                            "date": "2023-11-12",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fa3",
                            "image_url": "https://imagevault.delectame.com/md5/64bb8cde4cc0ca742a39707b745561a4",
                            "date": "2023-02-24",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fa4",
                            "image_url": "https://imagevault.delectame.com/md5/f75f0e8fd65a64cedbcb1b3089716fec",
                            "date": "2023-08-19",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fa5",
                            "image_url": "https://imagevault.delectame.com/md5/4ffa4c4c9f4b4a686455e3fb0bee57d1",
                            "date": "2023-07-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fa6",
                            "image_url": "https://imagevault.delectame.com/md5/62a1c0c130ab9421a62c6171a1540a46",
                            "date": "2023-05-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fa7",
                            "image_url": "https://imagevault.delectame.com/md5/0e7f418b56b309f50dec1887bbf90911",
                            "date": "2024-05-13",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fa8",
                            "image_url": "https://imagevault.delectame.com/md5/5f8c6ccbf0b715b6be683015523d125a",
                            "date": "2024-03-19",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fa9",
                            "image_url": "https://imagevault.delectame.com/md5/d61b886d8c7c3f8a0db41efb9f73ff48",
                            "date": "2024-05-13",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93faa",
                            "image_url": "https://imagevault.delectame.com/md5/ff856b696039cfefc0a36a4f0929bccf",
                            "date": "2023-10-21",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fab",
                            "image_url": "https://imagevault.delectame.com/md5/a4e91526e3a07e4c18e1ae52935eb727",
                            "date": "2023-10-21",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fac",
                            "image_url": "https://imagevault.delectame.com/md5/5ea6a5929d4e6ff087463603fd9c7523",
                            "date": "2024-03-05",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fad",
                            "image_url": "https://imagevault.delectame.com/md5/0b2c92dfe425f8641f2079438048c4d8",
                            "date": "2023-02-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fae",
                            "image_url": "https://imagevault.delectame.com/md5/b2b53ab5a5b2caea95e37260995d0e26",
                            "date": "2023-02-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93faf",
                            "image_url": "https://imagevault.delectame.com/md5/8b38d0a393e25822e1970eff69e4b41e",
                            "date": "2023-10-21",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fb0",
                            "image_url": "https://imagevault.delectame.com/md5/720d6d4b641e6238385cd2a341a0ae78",
                            "date": "2024-03-05",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fb1",
                            "image_url": "https://imagevault.delectame.com/md5/ac5a82dc47042a8e9d9ebbcf3179390d",
                            "date": "2024-03-05",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fb2",
                            "image_url": "https://imagevault.delectame.com/md5/266867c2ec4ae35a0e4398205a423e6d",
                            "date": "2023-04-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fb3",
                            "image_url": "https://imagevault.delectame.com/md5/6f83de3e162b7a2cf71d3b0ca464e1eb",
                            "date": "2023-04-26",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fb4",
                            "image_url": "https://imagevault.delectame.com/md5/9943e3c85f8496b41e7262f6d4108704",
                            "date": "2023-04-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fb5",
                            "image_url": "https://imagevault.delectame.com/md5/f35a6a8687b59c744da0f810aa16733d",
                            "date": "2023-01-08",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fb6",
                            "image_url": "https://imagevault.delectame.com/md5/c35be0c6b0e629370951302c75f348a6",
                            "date": "2023-04-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fb7",
                            "image_url": "https://imagevault.delectame.com/md5/10314c3ef8d50ae77a669e7dd43121c7",
                            "date": "2024-06-28",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fb8",
                            "image_url": "https://imagevault.delectame.com/md5/819772f1c9be80d38ec52ac900a584d0",
                            "date": "2024-06-28",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fb9",
                            "image_url": "https://imagevault.delectame.com/md5/23c51ad87bde63239f05fe15746f961a",
                            "date": "2024-03-31",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fba",
                            "image_url": "https://imagevault.delectame.com/md5/9c273f3a0381cd10bbf90a6585a82e1a",
                            "date": "2024-03-31",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fbb",
                            "image_url": "https://imagevault.delectame.com/md5/c7bdf805da809ec0fe1a0581c2862089",
                            "date": "2023-03-19",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fbc",
                            "image_url": "https://imagevault.delectame.com/md5/a011a8c26d7ff089ffdb866b2a10ae9c",
                            "date": "2024-01-10",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fbd",
                            "image_url": "https://imagevault.delectame.com/md5/91bae12bcbf9a7e21f2bbbf15acb9ee9",
                            "date": "2024-02-29",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fbe",
                            "image_url": "https://imagevault.delectame.com/md5/78f42447c837a246c9c73c8c48556764",
                            "date": "2024-02-25",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fbf",
                            "image_url": "https://imagevault.delectame.com/md5/27105df73cd60d9a48c1faf1bfb41f6d",
                            "date": "2024-02-25",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fc0",
                            "image_url": "https://imagevault.delectame.com/md5/2f74f47826f1d8a8768eb7145d089cad",
                            "date": "2022-08-18",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fc1",
                            "image_url": "https://imagevault.delectame.com/md5/3316631f8ad10c4044d75ba07802f378",
                            "date": "2022-11-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fc2",
                            "image_url": "https://imagevault.delectame.com/md5/5fd6871f14a6533421e21cc004035de5",
                            "date": "2022-11-06",
                            "label": "tv"
                        }
                    ],
                    "soccer_images_count": 24,
                    "_id": "68646fe29b544de5c5c93fc3"
                },
                "comments": {
                    "total_comments": 1,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c93fc4",
                            "comment_text": "Very nice food and service,  can watch all games life",
                            "date": "2024-01-18",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 1,
                    "_id": "68646fe29b544de5c5c93fc5"
                },
                "tags": [
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c93fc6"
            },
            "cityUid": "79f82aabcc144e8f36a64d682e93147db93aaf4e",
            "provinceUid": "8bd3f861205b44a6c3f397348f61a2eb53aaf0ca",
            "regionUid": "1f182abbec6f67fe89ddadca1f9424087f973b48",
            "postalCodeUid": "ea9e50b4adfe49f94fee7e2623ca9c7ff238378d",
            "provinceNameNormalized": "barcelona",
            "nameNormalized": "alroucherestaurante&cafe",
            "links": {
                "tripAdvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g187497-d19804379-Reviews-Alrouche_Restaurant-Barcelona_Catalonia.html",
                "googleUrl": "https://maps.google.es/?cid=17419598965363682422",
                "elTenedorUrl": null,
                "facebookUrl": null,
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf4d",
            "restaurantUidentifier": "184f21a94f8e682867833a403a46dc9bc26ee602",
            "name": "VISTREA KAFENTO",
            "streetAddress": "el parquin",
            "numberAddress": "5A",
            "provinceName": "Asturias",
            "regionName": "Principado de Asturias",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99995,
            "evidences": {
                "images": {
                    "total_images": 88,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c93fc7",
                            "image_url": "https://imagevault.delectame.com/md5/f18f1b556570f2f1ce848324d8d5b7c7",
                            "date": "2023-09-02",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fc8",
                            "image_url": "https://imagevault.delectame.com/md5/2c045868565772dda142cb3918c0201e",
                            "date": "2023-09-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fc9",
                            "image_url": "https://imagevault.delectame.com/md5/419f491b0914d389abed3b4345b8b702",
                            "date": "2023-09-02",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fca",
                            "image_url": "https://imagevault.delectame.com/md5/b5157a46b7877d048d610d0ea145d613",
                            "date": "2023-09-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fcb",
                            "image_url": "https://imagevault.delectame.com/md5/9e0004e0b778cd1a92c087188603465e",
                            "date": "2023-08-28",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fcc",
                            "image_url": "https://imagevault.delectame.com/md5/80a6a23e5ff89e1f3f67641144a5abe3",
                            "date": "2023-08-09",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fcd",
                            "image_url": "https://imagevault.delectame.com/md5/2096e83f370af1214b6666630fcaed7f",
                            "date": "2023-09-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fce",
                            "image_url": "https://imagevault.delectame.com/md5/12d2a232bb7a647e319137a069336e0a",
                            "date": "2023-08-28",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fcf",
                            "image_url": "https://imagevault.delectame.com/md5/65f040d5b57dad8e52a225d55b74596f",
                            "date": "2023-08-28",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fd0",
                            "image_url": "https://imagevault.delectame.com/md5/8d7521c5c81f310fc7e835235be8e141",
                            "date": "2023-08-09",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fd1",
                            "image_url": "https://imagevault.delectame.com/md5/33806e22c23acf49a9687f604fba79e5",
                            "date": "2023-09-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fd2",
                            "image_url": "https://imagevault.delectame.com/md5/4766a66bca64ab8976ce72379aac6e7c",
                            "date": "2023-08-15",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fd3",
                            "image_url": "https://imagevault.delectame.com/md5/850788a1d6e9bb445719a15ffbf60786",
                            "date": "2023-06-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fd4",
                            "image_url": "https://imagevault.delectame.com/md5/862f0d9c26fec074c9febc6dd2266e95",
                            "date": "2023-08-15",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fd5",
                            "image_url": "https://imagevault.delectame.com/md5/34516ea8d0a53e69814a7e5d732190ff",
                            "date": "2023-08-15",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fd6",
                            "image_url": "https://imagevault.delectame.com/md5/38a3ba62f6c3b77875df5ad4e37221ba",
                            "date": "2023-08-09",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fd7",
                            "image_url": "https://imagevault.delectame.com/md5/f0ad539aed275cd634c0548003d1c2d3",
                            "date": "2023-06-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fd8",
                            "image_url": "https://imagevault.delectame.com/md5/4ddec4d692b410142e9e1e9cedaaedbc",
                            "date": "2023-08-15",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fd9",
                            "image_url": "https://imagevault.delectame.com/md5/2cbd05c91a2e1c969c7ab81f79687d3f",
                            "date": "2023-06-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fda",
                            "image_url": "https://imagevault.delectame.com/md5/cb459eef762ea7772c5ec29866a3e71d",
                            "date": "2023-09-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fdb",
                            "image_url": "https://imagevault.delectame.com/md5/db88eb284630c042f4197ba141856d77",
                            "date": "2023-08-15",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fdc",
                            "image_url": "https://imagevault.delectame.com/md5/d4adb7a1d11b8aa2e7437e69aa01cbcf",
                            "date": "2023-09-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fdd",
                            "image_url": "https://imagevault.delectame.com/md5/4fe017074bfe677d6696ed91c7bcca64",
                            "date": "2023-09-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fde",
                            "image_url": "https://imagevault.delectame.com/md5/19a245340b4146b734f0c96ab3cd54d6",
                            "date": "2023-08-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fdf",
                            "image_url": "https://imagevault.delectame.com/md5/cbc4cd2f10cd78ff762842ef9f523216",
                            "date": "2023-09-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fe0",
                            "image_url": "https://imagevault.delectame.com/md5/a969d00f17c9830db3f3ef37c43a0baa",
                            "date": "2023-08-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fe1",
                            "image_url": "https://imagevault.delectame.com/md5/73d69474b317997b1f9d538290be19fe",
                            "date": "2023-09-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fe2",
                            "image_url": "https://imagevault.delectame.com/md5/52e4004cb7c796a2afb0675b104a629f",
                            "date": "2023-02-11",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fe3",
                            "image_url": "https://imagevault.delectame.com/md5/3863968001d7175587a92eee8c12e928",
                            "date": "2023-08-14",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fe4",
                            "image_url": "https://imagevault.delectame.com/md5/84941d1260281e59d1d3910a8207fd2e",
                            "date": "2023-02-11",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fe5",
                            "image_url": "https://imagevault.delectame.com/md5/b4adfbbc5a03c6894cf734532e62732b",
                            "date": "2024-04-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fe6",
                            "image_url": "https://imagevault.delectame.com/md5/9cb84aac29aeade4c6b34fd0e05b6855",
                            "date": "2023-08-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fe7",
                            "image_url": "https://imagevault.delectame.com/md5/876b1846edb731527ca7f99ff11ea44c",
                            "date": "2023-02-11",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fe8",
                            "image_url": "https://imagevault.delectame.com/md5/c6b82cc56b2041898d746d2008847ad5",
                            "date": "2023-09-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fe9",
                            "image_url": "https://imagevault.delectame.com/md5/f8c3f4886abcdc72202968ce5a34f22a",
                            "date": "2023-08-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fea",
                            "image_url": "https://imagevault.delectame.com/md5/bc6af87365ed72e56ee1b10e8d0f6884",
                            "date": "2023-09-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93feb",
                            "image_url": "https://imagevault.delectame.com/md5/9ae2956737db98391ef27aa5cb512b31",
                            "date": "2023-09-03",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fec",
                            "image_url": "https://imagevault.delectame.com/md5/98ae88514c040107fb793a2867073f28",
                            "date": "2024-04-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fed",
                            "image_url": "https://imagevault.delectame.com/md5/bfe46d1c2f53bcae1f2d3d9bf4aa5c92",
                            "date": "2023-08-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fee",
                            "image_url": "https://imagevault.delectame.com/md5/61485cf675e87ffe8022d84823b8627b",
                            "date": "2023-08-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fef",
                            "image_url": "https://imagevault.delectame.com/md5/e89604eaa5003a135abf3200600d42d4",
                            "date": "2024-04-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ff0",
                            "image_url": "https://imagevault.delectame.com/md5/a55a64a2f755922c9351c79ae68d1ef8",
                            "date": "2023-09-03",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ff1",
                            "image_url": "https://imagevault.delectame.com/md5/f12c8fbc28ad3c30dc9c3d34e4383d22",
                            "date": "2023-02-11",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ff2",
                            "image_url": "https://imagevault.delectame.com/md5/20ab9ddf5adbef3cda09321cb915da4f",
                            "date": "2024-02-11",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ff3",
                            "image_url": "https://imagevault.delectame.com/md5/36b4438ae7a76180bdcbc9ed8b7d8331",
                            "date": "2024-02-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ff4",
                            "image_url": "https://imagevault.delectame.com/md5/93b2b47e4ff564ae8a3fb65c6f2ba153",
                            "date": "2023-08-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ff5",
                            "image_url": "https://imagevault.delectame.com/md5/c312699c8dc0c46d106bb90d216157cf",
                            "date": "2023-08-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ff6",
                            "image_url": "https://imagevault.delectame.com/md5/a9f0ad87e73f886fcd9db9c44952ed16",
                            "date": "2023-09-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ff7",
                            "image_url": "https://imagevault.delectame.com/md5/f1f6eafac0c0739b4c0c7a95ba67581c",
                            "date": "2024-01-13",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ff8",
                            "image_url": "https://imagevault.delectame.com/md5/f7444e139c3832a4889b66cbc3cd7c4a",
                            "date": "2024-01-13",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ff9",
                            "image_url": "https://imagevault.delectame.com/md5/17898d6ad974b72a3e97db0da8c275e0",
                            "date": "2023-08-06",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ffa",
                            "image_url": "https://imagevault.delectame.com/md5/b83a3c2c53f21f52fcf51ca237500dfb",
                            "date": "2023-08-12",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ffb",
                            "image_url": "https://imagevault.delectame.com/md5/1da2ef8731c5a96a7994c597deb67545",
                            "date": "2023-09-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ffc",
                            "image_url": "https://imagevault.delectame.com/md5/fabafec75c4e89e90c89fcf53c0a8345",
                            "date": "2023-09-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ffd",
                            "image_url": "https://imagevault.delectame.com/md5/1c21394805499ff34b8214e63d7a70f2",
                            "date": "2023-07-15",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93ffe",
                            "image_url": "https://imagevault.delectame.com/md5/f18d6216e813a7b24674ab8f5f44df00",
                            "date": "2023-08-12",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c93fff",
                            "image_url": "https://imagevault.delectame.com/md5/245760ce4263fb5b37007b7a2e77eb7c",
                            "date": "2023-08-12",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94000",
                            "image_url": "https://imagevault.delectame.com/md5/44ae8e4784e47f38ce7030b3b4287e14",
                            "date": "2023-07-15",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94001",
                            "image_url": "https://imagevault.delectame.com/md5/2c8106fea579dbb9f9bab4846bb11784",
                            "date": "2023-08-12",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94002",
                            "image_url": "https://imagevault.delectame.com/md5/2c598f68cd2caa5f85a952cb6acc59e7",
                            "date": "2023-08-12",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94003",
                            "image_url": "https://imagevault.delectame.com/md5/3feb929bdceec015918da1a0abfe03bc",
                            "date": "2023-02-11",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94004",
                            "image_url": "https://imagevault.delectame.com/md5/42986b69fcb7c48c6b5effd569e5ce36",
                            "date": "2023-07-15",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94005",
                            "image_url": "https://imagevault.delectame.com/md5/180e3188976e99d62adc8c26749eed5d",
                            "date": "2024-04-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94006",
                            "image_url": "https://imagevault.delectame.com/md5/f087fdea6245c52f893479cdaed5662e",
                            "date": "2023-08-11",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94007",
                            "image_url": "https://imagevault.delectame.com/md5/e3f7366cf0305b2bfd2984897d75e82b",
                            "date": "2023-08-09",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94008",
                            "image_url": "https://imagevault.delectame.com/md5/39fb0130ba7b64cec3bfbcf741935daa",
                            "date": "2023-07-15",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94009",
                            "image_url": "https://imagevault.delectame.com/md5/543abba652a81a4ac01017bbef361be4",
                            "date": "2024-04-13",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9400a",
                            "image_url": "https://imagevault.delectame.com/md5/e3d4aa1983633e1c983df1487bf967eb",
                            "date": "2024-04-13",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9400b",
                            "image_url": "https://imagevault.delectame.com/md5/f4c9f2f317fb67bb2aa4f62c27225063",
                            "date": "2024-04-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9400c",
                            "image_url": "https://imagevault.delectame.com/md5/b4a874a90be5379f76b7130db2745312",
                            "date": "2024-04-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9400d",
                            "image_url": "https://imagevault.delectame.com/md5/ec61606a8022a0034d2a4a2800ad9223",
                            "date": "2024-04-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9400e",
                            "image_url": "https://imagevault.delectame.com/md5/fd5b17dc8609266b79704bef24d7a0f4",
                            "date": "2024-04-07",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9400f",
                            "image_url": "https://imagevault.delectame.com/md5/40be62978fc2636c667bdc2be780c94b",
                            "date": "2024-04-07",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94010",
                            "image_url": "https://imagevault.delectame.com/md5/478e19b2178cbf3d051a7d35c9535c47",
                            "date": "2024-04-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94011",
                            "image_url": "https://imagevault.delectame.com/md5/de8cef9b6cdcf97679d20d2544b842fb",
                            "date": "2024-04-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94012",
                            "image_url": "https://imagevault.delectame.com/md5/4136af17e7f1f1650a69f18bada7a369",
                            "date": "2023-06-25",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94013",
                            "image_url": "https://imagevault.delectame.com/md5/d09f167264905585765b0c67c81d4bff",
                            "date": "2023-04-22",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94014",
                            "image_url": "https://imagevault.delectame.com/md5/39b242ed3462c4e6697bf6a9695e9996",
                            "date": "2023-06-18",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94015",
                            "image_url": "https://imagevault.delectame.com/md5/29ad58c7809f458965824d2b79b2a6e3",
                            "date": "2023-06-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94016",
                            "image_url": "https://imagevault.delectame.com/md5/90afe9fe2ac106d856b608b57bc9075c",
                            "date": "2023-04-22",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94017",
                            "image_url": "https://imagevault.delectame.com/md5/9666e89dd5e5a11c1f1707edfc48a93b",
                            "date": "2023-04-22",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94018",
                            "image_url": "https://imagevault.delectame.com/md5/e7fed23f3f25047dba2dfe5cb2742669",
                            "date": "2023-04-22",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94019",
                            "image_url": "https://imagevault.delectame.com/md5/ef94874defe0fb1ad93f85b67b620a02",
                            "date": "2023-04-22",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9401a",
                            "image_url": "https://imagevault.delectame.com/md5/5a6f8477620911ff5afb6fc862e4a8e1",
                            "date": "2023-06-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9401b",
                            "image_url": "https://imagevault.delectame.com/md5/4c6513e75d9575ff075e50d17546d462",
                            "date": "2023-04-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9401c",
                            "image_url": "https://imagevault.delectame.com/md5/1283b3014fcc490dbb822c74a556202e",
                            "date": "2022-11-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9401d",
                            "image_url": "https://imagevault.delectame.com/md5/be4d00f7e54bea23e5ca84aa067b4198",
                            "date": "2022-09-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9401e",
                            "image_url": "https://imagevault.delectame.com/md5/fc5cc7fd7ef2ba1bde2a3edef2655725",
                            "date": "2022-09-14",
                            "label": "tv"
                        }
                    ],
                    "soccer_images_count": 21,
                    "_id": "68646fe29b544de5c5c9401f"
                },
                "comments": {
                    "total_comments": 3,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c94020",
                            "comment_text": "Buena atención,con televisiones para ver tds los partidos,buen ambiente y parque al lao para los mas peques ,",
                            "date": "2023-05-31",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94021",
                            "comment_text": "Buen café, servicio y local limpio, mucha prensa para leer, ponen todos los Partidos de Fútbol en muchas TV que tienen. Ahora aparte de El País, el Mundo, el Marca, el As, el Mundo Deportivo, El Comercio de Oviedo, Comercio de Gijon y la Nueva España, jeje aunque suponga más cafés para estar informado ????",
                            "date": "2023-06-12",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94022",
                            "comment_text": "Buen café, servicio y local limpio, abierto desde las 6 am, mucha prensa para leer, ponen todos los Partidos de Fútbol en muchas TV que tienen. Ahora aparte de El País, el Mundo, el Marca, el As, el Mundo Deportivo, El Comercio de Oviedo, Comercio de Gijon y la Nueva España, jeje aunque suponga más cafés para estar informado ????",
                            "date": "2023-12-04",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 3,
                    "_id": "68646fe29b544de5c5c94023"
                },
                "tags": [
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c94024"
            },
            "cityUid": "e106b0d3bd53268ea16443724866d732081c6a4a",
            "provinceUid": "e56a573e49b556d0488e97b7f1a123c304b9cf7d",
            "regionUid": "1ff3b59d1db6ad8004225c7d3c89e3f0e7883c81",
            "postalCodeUid": "556807542258b7503c48103d5012dd5f1bbff63b",
            "provinceNameNormalized": "asturias",
            "nameNormalized": "vistreakafento",
            "links": {
                "tripAdvisorUrl": null,
                "googleUrl": "https://maps.google.es/?cid=12540429644339862502",
                "elTenedorUrl": null,
                "facebookUrl": "https://www.facebook.com/vistrea/",
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf4e",
            "restaurantUidentifier": "f8a600a6e9f32f075250fae4d7fa3f93322cea3b",
            "name": "Lagarto Food & Drinks",
            "streetAddress": "Calle de balmes",
            "numberAddress": "203",
            "provinceName": "Barcelona",
            "regionName": "Cataluña",
            "status": "OPERATIONAL",
            "potential_ratio": 99.9999,
            "evidences": {
                "images": {
                    "total_images": 25,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c94025",
                            "image_url": "https://imagevault.delectame.com/md5/a1b8131b97e9adfc6032df073bbae6da",
                            "date": "2024-05-08",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94026",
                            "image_url": "https://imagevault.delectame.com/md5/20c315f799a8ae8882e1a870f0ffa319",
                            "date": "2024-02-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94027",
                            "image_url": "https://imagevault.delectame.com/md5/039a67fcee4c68ed7a046c3a38c4e2fd",
                            "date": "2024-05-08",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94028",
                            "image_url": "https://imagevault.delectame.com/md5/36beb464bb17fe0d36c2ff622e7bcdf6",
                            "date": "2024-01-25",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94029",
                            "image_url": "https://imagevault.delectame.com/md5/b44392f6c447876962131429c1e44bd2",
                            "date": "2024-02-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9402a",
                            "image_url": "https://imagevault.delectame.com/md5/80b3ff2b85219183be818f4311107951",
                            "date": "2024-01-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9402b",
                            "image_url": "https://imagevault.delectame.com/md5/43ec5e6fb926dc2ec01dcdcf3a0f3d54",
                            "date": "2023-11-25",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9402c",
                            "image_url": "https://imagevault.delectame.com/md5/c65bc547930dbb547b2d3d3ee3554bac",
                            "date": "2024-02-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9402d",
                            "image_url": "https://imagevault.delectame.com/md5/47e6393d110de13693b6628b69e0d95c",
                            "date": "2024-01-14",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9402e",
                            "image_url": "https://imagevault.delectame.com/md5/44643610c601e7d9c230773a0603a3e7",
                            "date": "2023-12-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9402f",
                            "image_url": "https://imagevault.delectame.com/md5/9d39d2a18357acfa1eed92be37cd807c",
                            "date": "2023-06-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94030",
                            "image_url": "https://imagevault.delectame.com/md5/8e1ed4ed40da9e58c71f5249773e423f",
                            "date": "2023-06-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94031",
                            "image_url": "https://imagevault.delectame.com/md5/9dbce867a9227d5c1cc5e1aefb1b245e",
                            "date": "2023-09-24",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94032",
                            "image_url": "https://imagevault.delectame.com/md5/7df1e4e996a08cb749ebf1cd6a23c661",
                            "date": "2023-09-24",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94033",
                            "image_url": "https://imagevault.delectame.com/md5/c2f48530984dbf3229dc3a8201a5fc62",
                            "date": "2023-07-28",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94034",
                            "image_url": "https://imagevault.delectame.com/md5/4042ff511c4acad384ef6f1ea69db28e",
                            "date": "2023-01-13",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94035",
                            "image_url": "https://imagevault.delectame.com/md5/3a7cf20637698264c020ea1290b2ad8f",
                            "date": "2023-05-17",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94036",
                            "image_url": "https://imagevault.delectame.com/md5/7051dc2ca5bd1e84f4c006f0bdd5225d",
                            "date": "2023-01-12",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94037",
                            "image_url": "https://imagevault.delectame.com/md5/cfdf1e4da6d386fa4dc10b7b5e4e8105",
                            "date": "2023-01-13",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94038",
                            "image_url": "https://imagevault.delectame.com/md5/11935b545b3ca9f95ec4cc6dbf4ef224",
                            "date": "2022-12-30",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94039",
                            "image_url": "https://imagevault.delectame.com/md5/24574c85205e989c2836dfabdc1bb20e",
                            "date": "2022-12-09",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9403a",
                            "image_url": "https://imagevault.delectame.com/md5/d2ea4d6852fd71ef042fa6136e431866",
                            "date": "2022-09-30",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9403b",
                            "image_url": "https://imagevault.delectame.com/md5/37778836319494d5ca0337f71f7f7d90",
                            "date": "2022-10-15",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9403c",
                            "image_url": "https://imagevault.delectame.com/md5/5867e19cd13670a4cccf13d342f5fc66",
                            "date": "2022-09-30",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9403d",
                            "image_url": "https://imagevault.delectame.com/md5/73ab472acedb612f91175049bd1f0173",
                            "date": "2022-09-09",
                            "label": "tv"
                        }
                    ],
                    "soccer_images_count": 6,
                    "_id": "68646fe29b544de5c5c9403e"
                },
                "comments": {
                    "total_comments": 42,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c9403f",
                            "comment_text": "Primera vez q voy. Ambientazo por la música q ponen, el servicio perfecto, lo que comimos son raciones generosas y para ver partidos con los amigos, no hay mejor sitio que el Lagarto con todas las pantallas q tienen en todo el local!!!!!",
                            "date": "2022-12-15",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94040",
                            "comment_text": "Super encantado como bar. Me lo he pasado genial. Hay muchas pantallas para ver cualquier deporte y disfrutarlo. El servicio súper bien. Unos nachos para compartir los mejores de la ciudad. El servicio espectacular. Lo recomiendo 10/10",
                            "date": "2022-12-14",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94041",
                            "comment_text": "Muy bueno para ver partidos !!! El servicio 10/10",
                            "date": "2022-12-10",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94042",
                            "comment_text": "Hola buenas, quería dejar una pequeña opinión, ayer domingo fuimos a ver la final del mundial, estaba todo a reventar, buen ambiente. La afición argentina ya ganaba por goleada jajajjaja, nos pedimos algunas tapas y cerveza para bajar la buena vianda. Debido al máximo aforo hubo un inconveniente que prontamente fue solucionado por el encargado dejándonos a mi pareja y a mí contentos, tengo un pequeño establecimiento  y sé de lo que hablo. en conclusión una velada magnífica, volveremos gracias al personal del lagarto.",
                            "date": "2022-12-19",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94043",
                            "comment_text": "Deberían vender solo cerveza.  La comida es pésima (inclusive se podría decir que en mal estado). Pantallas ok!",
                            "date": "2022-12-01",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94044",
                            "comment_text": "Buen lugar para ver eventos deportivos, buenos cócteles y excelente servicio.",
                            "date": "2022-12-06",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94045",
                            "comment_text": "Very good patatas bravas and mozarella sticks. Great place to watch football games",
                            "date": "2022-12-06",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94046",
                            "comment_text": "Pedimos 3 hamburguesas, no tenían casi ingredientes. Las patatas dieron pena. El servicio y el ambiente para ver futbol bien. No recomendaría este lugar.",
                            "date": "2022-12-06",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94047",
                            "comment_text": "Muy buen ambiente para ver el fútbol, buena comida y servicio impecable, lo recomiendo",
                            "date": "2022-12-02",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94048",
                            "comment_text": "El mejor lugar para ver el fútbol en la zona, el personal es súper amable y siempre la pasamos súper bien! Los nachos Lagarto están deliciosos!! Súper recomendable!!",
                            "date": "2022-12-02",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94049",
                            "comment_text": "Awesome place to watch sports, great nachos and atmosphere",
                            "date": "2022-12-01",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9404a",
                            "comment_text": "Un espacio amplio, con muchas pantallas para ver deportes, ambiente divertido y respetuoso, camareros simpáticos, agradables y eficientes. Poco más se puede pedir para una tarde de fútbol. Nuestro sitio de referencia para estos eventos.",
                            "date": "2022-12-07",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9404b",
                            "comment_text": "Trato inmejorable, nos han hecho sentir como en casa. La comida muy buena :)! Además podíamos ver el partido del Mundial y han estado pendientes todo el rato! Sin duda para repetir :)!",
                            "date": "2022-12-06",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9404c",
                            "comment_text": "Muy recomendable! Trato muy atento y estuvieron siempre pendientes que estemos bien, que disfrutemos del partido. Las hamburguesa buenisssimas! Y los nachos super bien (y enormes).",
                            "date": "2022-12-06",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9404d",
                            "comment_text": "Hemos venido a ver el partido Portugal-Suiza, por una amiga nuestra portuguesa y nos han tratado super bien.. muy pendientes de nosotras y nos han hecho sentir como en casa. Hemos comido de lujo.",
                            "date": "2022-12-06",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9404e",
                            "comment_text": "Sitio muy agradable con muy buena música y buena comida. Ideal para ir con família y/O amigos, y para ver partidos!",
                            "date": "2022-12-06",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9404f",
                            "comment_text": "Great place to watch the World Cup! Good food, cold beer, great service! Doesn’t split bills which can be inconvenient in groups.",
                            "date": "2022-12-06",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94050",
                            "comment_text": "Buen lugar para comer y tomar, disfrutamos ver los partidos aquí ???? Excelente servicio!",
                            "date": "2022-12-06",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94051",
                            "comment_text": "Excelente servicio y gran ambiente. Completamente recomendable, especialmente para ver partidos.",
                            "date": "2022-12-06",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94052",
                            "comment_text": "Gran lugar para disfrutar del fútbol, cervezas internacionales y en compañía de amigos!",
                            "date": "2023-01-12",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94053",
                            "comment_text": "Muy enrollados, un ambiente muy especial y un buen surtido, además de unos pantallones increíbles para ver partidos, muy guay todo,!!!!!",
                            "date": "2023-01-17",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94054",
                            "comment_text": "El Lagarto es como mi segunda casa. Buena cerveza, buenas tapas, buena gente y muy buen ambiente. El personal, Mar, Judit,... siempre con una sonrisa en la boca y siempre dispuestas a que no te falte ese ingrediente (una buena cerveza, un pastrami de premio o unas buenas risas) que redondean el día. Javier, el que lo organiza todo, un crack que solo con verte adivina lo que te apetece. En definitiva, un lugar de esos que hay que visitar de vez en cuando para ver un partido (tiene algo así como 9 o 10 pantallas) o encontrarte con los amigos para pasar un rato de los que quedan en la memoria. ¡Un 10!",
                            "date": "2023-02-13",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94055",
                            "comment_text": "Buena comida pero demasiado caro en comparación a la cantidad, el acompañamiento eran literalmente 4 patatas contadas, le pongo 3 estrellas por la gran cantidad de pantallas que tienen, el espacio es bueno",
                            "date": "2023-02-24",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94056",
                            "comment_text": "Excellent sports bar on Balmes. Lots of TVs, fantastic for football in particular, great pub-type menu (nachos, burgers, ribs, chicken tenders, tacos, onion rings, etc)., kid-friendly, and friendly, efficient wait staff and management. They also have a traditional bar stool area with TVs above the bar if you’re alone or just prefer to sit at a bar.  Local crowd too, if you’re seeking to avoid tourist traps. Strongly recommended.",
                            "date": "2023-02-24",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94057",
                            "comment_text": "excellent service! Great to watch football. If you are Madridista, welcome!!",
                            "date": "2023-02-21",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94058",
                            "comment_text": "El ambiente es genial si vas a ver un partido de fútbol. 10/10 para la comida y la amabilidad del personal, los baños muy limpios y (al menos en el de hombres) había de todo para el cuidado personal; colonia, cremas, espuma fijadora… Si vas con amigos o familia pasarás un rato increíble. APTO PARA CELIACOS!",
                            "date": "2023-04-06",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94059",
                            "comment_text": "Pub muy agradable y original, perfecto para disfrutar de los partidos de fútbol e ideal para pasar la tarde con los amigos. Excelente comida y hamburguesas! Cerveza clásica pero impecable. Camareros rápidos y amables.",
                            "date": "2023-05-15",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9405a",
                            "comment_text": "Great place to watch the World Cup! Good food, cold beer, great service! Doesn’t split bills which can be inconvenient for groups.",
                            "date": "2023-05-02",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9405b",
                            "comment_text": "Good ribs and fantastic place to see football. Hamburger quite average in my opinion. My friends bread was burned, but service so slow we did not dare to ask for a new one. Unfortunately they seem understaffed and not very friendly service.",
                            "date": "2023-05-19",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9405c",
                            "comment_text": "Muy buen ambiente y grande, con buena relación calidad/precio, el costillar delicioso y tierno, las hamburguesas en su punto y las salsas muy originales. Perfecto para comer/cenar y tomar algo, además tienen varias pantallas para eventos deportivos.",
                            "date": "2023-07-05",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9405d",
                            "comment_text": "Dentro de un local muy bien ambientado, con estilo de pub para ver deportes en pantalla grande y tomar algún combinado y comida Tex-Mex, me sorprende encontrar un magnífico menú para comer a mediodía!! Muy bien diseñado, con variedad de platos, bien elaborados, para complacer gran diversidad de clientes. Bien atendido y servido, por el equipo de Javier, cabe destacar el buen trabajo de la chef, Mai!! Felicidades!! Seguiré repitiendo tanto como pueda!! Ah, no irse sin probar algún Coktail o chupito!! Seguid así!!",
                            "date": "2023-07-28",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9405e",
                            "comment_text": "Tiene un buen ambiente, para disfrutar los partidos de Fútbol  con sus comidas y buenas bebidas..",
                            "date": "2024-01-14",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9405f",
                            "comment_text": "Sitio 100% recomendable. Buenisimas hamburguesas y el mejor sitio para ver el fútbol. Y lo mejor de todo el servicio",
                            "date": "2024-05-25",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94060",
                            "comment_text": "Te cobran 5€ por persona aún consumiendo en el local por venir a ver un partido de fútbol, lamentable",
                            "date": "2024-05-01",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94061",
                            "comment_text": "Pedimos entraña, aros de cebolla y batatas. Todo excelente, mientras mirabamos un partido de champions league. Pantallas por todos lados, mas que recomendable este lugar!",
                            "date": "2024-05-01",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94062",
                            "comment_text": "Muy buen sitio para ver partidos de futbol. Javier buen trato y con mucha atencion.",
                            "date": "2024-05-08",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94063",
                            "comment_text": "La comida muy rica pero nos cobraron 5€ por persona por ser dia de \"evento especial\" al haber un partido de futbol. Estaba indicado en la puerta del local pero me parece excesivo pagar 5€ cuando la comida te va a costar 15€",
                            "date": "2024-05-28",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94064",
                            "comment_text": "Worst place around to watch the football, they charge you 5 euros per person to watch it, never seen anyone do this at any sports bar, bit of a disgrace in my books. Go to any other bar in the area if you’re looking to watch the match.",
                            "date": "2024-05-02",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94065",
                            "comment_text": "El mejor bar para ver el fútbol en Barcelona. Los nachos además son top.",
                            "date": "2024-05-25",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94066",
                            "comment_text": "Excelente lugar para ver el fútbol y comer, además hay una gran variedad de bebidas.",
                            "date": "2024-05-07",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94067",
                            "comment_text": "No volvería si se trata de ver un partido, hemos consumido con amigos, y al irnos resulta que nos han cobrado 5€ adicionales por que han decidido que era un “evento especial” según conveniencia por que no en todos los partidos lo hacen.",
                            "date": "2024-05-04",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94068",
                            "comment_text": "Cobran 5€ de entrada x persona porque hoy había partido de futbol, aunque solo te tomes una cerveza",
                            "date": "2024-06-01",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 32,
                    "_id": "68646fe29b544de5c5c94069"
                },
                "tags": [
                    "bar deportivo",
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c9406a"
            },
            "cityUid": "79f82aabcc144e8f36a64d682e93147db93aaf4e",
            "provinceUid": "8bd3f861205b44a6c3f397348f61a2eb53aaf0ca",
            "regionUid": "1f182abbec6f67fe89ddadca1f9424087f973b48",
            "postalCodeUid": "fa616175cdbe9e6f3be70a64500002f1dd767dbf",
            "provinceNameNormalized": "barcelona",
            "nameNormalized": "lagartofood&drinks",
            "links": {
                "tripAdvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g187497-d23409221-Reviews-Lagarto_Food_Drinks-Barcelona_Catalonia.html",
                "googleUrl": "https://maps.google.es/?cid=1875653789679622092",
                "elTenedorUrl": "https://www.thefork.es/restaurante/lagarto-food-drinks-r691505",
                "facebookUrl": "https://www.facebook.com/people/Lagarto-Food-Drinks/100067928204272",
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf4f",
            "restaurantUidentifier": "896db50e5bb467be96c2671b4d1c5c355c992eb7",
            "name": "The Dolphin Inn Lanzarote",
            "streetAddress": "Calle la goleta",
            "numberAddress": "2",
            "provinceName": "Las Palmas",
            "regionName": "Canarias",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99969,
            "evidences": {
                "images": {
                    "total_images": 7,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c9406b",
                            "image_url": "https://imagevault.delectame.com/md5/4fb8de2f1d69727c3c546a4a37d5bb36",
                            "date": "2023-12-28",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9406c",
                            "image_url": "https://imagevault.delectame.com/md5/2b3bbd5084a0955327bd9e63946b108c",
                            "date": "2024-01-18",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9406d",
                            "image_url": "https://imagevault.delectame.com/md5/4f6bef804781d4bb699e8a52177c1053",
                            "date": "2023-02-17",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9406e",
                            "image_url": "https://imagevault.delectame.com/md5/89bc05d5faa1379ef583b675c53cee4e",
                            "date": "2023-12-28",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9406f",
                            "image_url": "https://imagevault.delectame.com/md5/78c26dcd9afb3ab147645da405d2259c",
                            "date": "2024-01-10",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94070",
                            "image_url": "https://imagevault.delectame.com/md5/ec6b354d9a9a33bbafa8f810f0fc2bcd",
                            "date": "2023-12-29",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94071",
                            "image_url": "https://imagevault.delectame.com/md5/d0682df0a6f47f5f6296df0f32f0522d",
                            "date": "2022-10-14",
                            "label": "tv with soccer"
                        }
                    ],
                    "soccer_images_count": 5,
                    "_id": "68646fe29b544de5c5c94072"
                },
                "comments": {
                    "total_comments": 41,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c94073",
                            "comment_text": "We have been here many times everytime we come to Costa Teguise. Great for football matches with many TV's to watch different matches. It has great views to the sea aswell. This is first time we had food due to previous years Covid regulations. I had the burger and my husband had the fish and chips. Both meals were amazing. Especially the proper home made chips were the best ever. Ian and all the staff are friendly, welcoming and work really hard as a team. Can't wait to come again when we book our next holiday 😃",
                            "date": "2022-08-09",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94074",
                            "comment_text": "Great bar, nicely ran by Ian. Suitable for families and catering for UK football. Such a great atmosphere and kept swearing free and good for families to have a drink and watch some matches. A really excellent vibe.",
                            "date": "2022-08-27",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94075",
                            "comment_text": "Lovely gaff got all the football food is great...Sunday roast is supposed to be great.ill get back to you on it .not had it yet...the boss is a nice geezer.",
                            "date": "2022-09-17",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94076",
                            "comment_text": "Love this Pub staff are very friendly. Great place to watch the football. I would ignore all negative reviews as I could not find fault with this pub. Will definitely come back on our next visit. Keep up the good work guys.",
                            "date": "2022-09-03",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94077",
                            "comment_text": "Guys and girls lovely location and the barmaids are great but if you want a peaceful night watching football go elsewhere as the owner from Birmingham don't stop chatting throughout the gsme",
                            "date": "2022-09-20",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94078",
                            "comment_text": "Great to watch F1 in. Dropped in for the F1 last week. Great screens to watch and Ian has the place setup Nicely Tasty food and cold drinks . Overall a good afternoon 😊",
                            "date": "2022-09-12",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94079",
                            "comment_text": "Good pub for a beer and a game of football",
                            "date": "2022-10-15",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9407a",
                            "comment_text": "Went in here a few times to watch the football , loads of screens to watch different games. The owner Ian is a blast, proper funny, like telling the whole pub everyone say by to Bristol as we were leaving. Quiz night was fun with Ian’s sense of humour adding to the experience. Can’t wait to get back next year for more laughs. Go here to watch the football for sure.",
                            "date": "2022-10-20",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9407b",
                            "comment_text": "Absolut unfreundlich! Wir haben ein paar Minuten länger gebraucht um uns zu entscheiden, was wir trinken wollen und wurden sofort aufgefordert zu gehen weil es dem Barpersonal zu lange gedauert hat. Schade, hätten dort gerne ein paar Bier getrunken und Fußball geguckt! (Translated by Google) Absolutely unfriendly! It took us a few minutes longer to decide what to drink and we were immediately asked to leave as the bar staff took too long. Shame, would have loved to have had a few beers and watched football there!",
                            "date": "2022-10-17",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9407c",
                            "comment_text": "Good host and great service. Can get your own pizza in when the kitchen is closed. Fantastic family  pub for TV football and rugby.",
                            "date": "2022-11-09",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9407d",
                            "comment_text": "Went to watch the football and a few drinks, what can I say such a great place, it was brilliant.  The landlord should have a spot at  Comedy Store he is great  character and a really good laugh, just what you want on holiday.  All the customers are really friendly which is a sign of a good host.",
                            "date": "2022-12-28",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9407e",
                            "comment_text": "The Dolphin is by far the best bar in Costa Teguise to watch the football. My family and friends have been coming back for 20+ years and have never been disappointed by the fantastic service, great value for money and the banter that Ian and his team bring to the whole experience. A bar not to miss when a big football afternoon / evening is on. Can’t wait to get back there again ⚽️⚽️????????????",
                            "date": "2022-12-28",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9407f",
                            "comment_text": "Excellent bar and food service. Solo table reserved and made to feel very welcome and at ease. \nFantastic opportunity to watch the England game. Comical commentary from the man called Ian, owner? Very friendly bar service. Food - no words other than..amazing value for money.  Atmosphere - amazing. Compliments to the chef and whoever sources the food/drinks. High quality. Well worth a visit. Very clean and welcoming. Understandable no swearing and young children rule. There’s plenty of adult only hotels so the ruling is welcome. I’ll be back end of February/early March so please reserve a table for a few more nights. I’ll contact staff to arrange and hopefully Wolves FC will be on one of the endless TV’s. Well done to all of the team. (Must try breakfast/lunch menu next time)",
                            "date": "2023-01-10",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94080",
                            "comment_text": "The guy who owns this place thinks it a good idea to commentate ( on everything) into his PA system he has set up in his little bar. He thinks he is some sought of super compère ? Annoys the hell out of people trying to relax in the many hotel pool areas adjacent to his bar and his clients trying to watch a game….\nSo if you go to the Classy ‘Dolphin Inn’ and he s got a microphone in his hand please remind him he’s not the only business that resides on the beach front….and to keep the noise down.",
                            "date": "2023-01-20",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94081",
                            "comment_text": "A great bar for relaxing, watching the view, catching the sun, or sitting inside if it's too hot. Plenty of football on, lots of TV's, good food and drinks. A clean, well looked after and well run bar. But the best thing about The Dolphin, are the guys who work there. They are so friendly, hard working and genuinely interested in you having a good time. Highly recommended.",
                            "date": "2023-01-22",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94082",
                            "comment_text": "Fabulous place to watch a match. Ian, the owner is one of the islands great character's....... Great place for a couple or group. If you're solo, Ian will make sure you're introduced to everyone. That's the kind of place it is.....Enjoy????☀️",
                            "date": "2023-01-16",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94083",
                            "comment_text": "Lovely friendly staff and good atmosphere. Not a blind spot if you are coming to watch the football.  Seaview if you aren't into sports.",
                            "date": "2023-02-18",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94084",
                            "comment_text": "Had lunch and watched England smash Wales. The staff work incredibly hard to look after everyone. Not suitable for kids it's an adults bar showing every football match simultaneously. Everyone had smiles on there faces. All the staff interact with the customers. If you don't like this jog on because most people do.\nThanks to Ian and the team, and the lovely lady who went out of her way to find me a chair to watch the match.",
                            "date": "2023-02-25",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94085",
                            "comment_text": "We went here wanting to watch Leeds vs Everton. Now as someone with one age 1 year old and one 6 year old I wouldn’t take my eldest to watch football at a pub as she asks a lot of questions and won’t sit still.\n\nMy 1 year old happily sits and watches Leeds with a cuddle.\n\nWe were turned away from the bar because it refuses service to anyone with an under 6. On an evening this is something we understand but at 4pm it is just blatant discrimination against young families to favour older day long drinkers and smokers.\n\nIf you have children or like children, don’t support this bar as they don’t.",
                            "date": "2023-02-18",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94086",
                            "comment_text": "Amazing little bar to watch the football and the service is really friendly.  The owner is a great guy and I love his running commentary",
                            "date": "2023-03-05",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94087",
                            "comment_text": "Nice bar for the football and attentive staff. My food was slightly cold (roast dinner) Yorkshire pudding and stuffing cold on the inside otherwise all good. For the price I can't complain.",
                            "date": "2023-04-30",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94088",
                            "comment_text": "The owner is such a nice person, makes you feel welcomed straight away, the same with the staff who have great table service/ mannerisms. As soon as we walked in offered us a drink asked us where we are from etc, if your looking for great drinks, great atmosphere the music is very good 70s,80s,90s all great for a brilliant view of the sea and plenty of seating, the is also no swearing which is good which helps your mouth???? Plenty of sports aswell which they have a notice board for football fans, F1 fans which is brilliant have a fun quiz around 2:30pm which gets everyone involved Having no one under 6 helps as you come to relax and have a good laugh with everyone The respect me and my family have received will be the reason I come back to Costa Tequise. I could spend all day here Thank you for all the great service, and hopefully, I will be seeing you every year! Best English/Irish bar in lanzarote hands down:)",
                            "date": "2023-04-28",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94089",
                            "comment_text": "Went to The Dolphin to watch the football on 2 occasions. Without doubt the best way to watch in a bar. Ian is a fantastic host, with huge pesonality. All of Ian other colleagues working where amazing to!. they couldnt do enough for us and created a great experience. VAR will nevere be the same again . Thank you Ian!",
                            "date": "2023-05-19",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9408a",
                            "comment_text": "Firstly the location is amazing on the sea front.  The staff are so friendly and polite,  we ate there on a couple of occasions and the food was lovely and really reasonably priced.  The drinks were good and they do the nicest cocktails.  They have several screens for sports,  when we went there was different matches on the tvs and supporters from different clubs,  but not once was there any swearing . There are no children under the age of 6 allowed. They also hold quiz afternoons .  We only discovered this place a few days before we left and it's definitely worth a visit. ",
                            "date": "2023-05-11",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9408b",
                            "comment_text": "Nice food great for football (and other sports) beers fine and screens are indoors so great picture no sun or shadows \nLots ov screens with different games with a main match commentary but still able to watch other games\n\nOnly downside the guy on the mic never shuts up so miss bits of commentary\n\nAnd his jokes are rubbish 😵‍💫",
                            "date": "2023-05-15",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9408c",
                            "comment_text": "We only visited the Dolphin Inn for a quick drink while at the beach. The bar was very clean and staff where all very friendly. The location for this bar is perfect! I ordered a Strawberry Pornstar and it was one of the nicest cocktails I’ve ever had and was nicely presented. We would’ve definitely returned! We did walk past this bar on a football night and it looked very busy but very well organised!",
                            "date": "2023-06-12",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9408d",
                            "comment_text": "Just back from Lanzarote,had a great day out at the Dolphin watching THE MIGHTY BLUES beat DIRTY LEEDS lol.If you are a football fan this is the place to be,Ian the owner is a top bloke and a great laugh,even if you are not a football fan still worth a visit for the food and banter,respect to all fans.\nWE ARE BLUES,WE ARE BIRMINGHAM(with a G) WATCH US GO NOW WE HAVE DOUGH K.R.O",
                            "date": "2023-08-18",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9408e",
                            "comment_text": "Stopped off on a walk to enjoy a drink and watch the rugby World Cup game. Service was fast and efficient and both myself, wife and child were made to feel welcome. Great atmosphere and fun.",
                            "date": "2023-09-28",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9408f",
                            "comment_text": "We went to find a pub where we could watch England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 at first look this bar didn’t have a table where I could navigate with my wheelchair I was just stood and the owner said come on in so I left my scooter outside and got sat at a table The pub has numerous screens so wherever you sit you can see a screen The landlord has lots of banter with everyone It’s a real little gem x ",
                            "date": "2023-10-15",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94090",
                            "comment_text": "MY Pub MY Rules, Have to watch the sport owner wants, soccer, soccer. Not very accommodating to other drinkers. Didn't hang around, usual beach bar, nothing special, nice neighboring pubs",
                            "date": "2023-10-01",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94091",
                            "comment_text": "Husband wanted to watch a match on holiday.  I went for a swim and joined him.  Thatchers Gold for a girl from Somerset!  Plus lovely friendly service, nice atmosphere and great snacks.  Perfect",
                            "date": "2023-10-30",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94092",
                            "comment_text": "Great place we watched the rugby here .great banter with the landlord .never ate here part from chips which were nice .would definitely recommend visiting especially if you like sport .",
                            "date": "2023-11-08",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94093",
                            "comment_text": "Very friendly pub, great views and a perfect place to sit with a drink and watch the world go by. I haven’t tried the food here yet but everyone eating were happy with their food. Great to watch the football too. I always drop in when I’m there",
                            "date": "2023-12-31",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94094",
                            "comment_text": "Great place for football, staff lovely, and work really hard ????",
                            "date": "2024-01-14",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94095",
                            "comment_text": "Great atmosphere - many people watching different games but all enjoying the warm friendly atmosphere and the odd bit of banter! Great drinks too!!",
                            "date": "2024-01-03",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94096",
                            "comment_text": "Came in here to watch the F1 and Sheffield Wednesday football game. Ended up spending around 5 hours in here! Staff were very accommodating and the owner was brilliant, very funny, made our time in here very enjoyable!",
                            "date": "2024-04-21",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94097",
                            "comment_text": "We went to watch the grand natjonal and football. The staff were so welcoming and great banter. Drinks were good price. They done a sweepstake for the national, 5€ a go and good prizes. Had a great time and would come back. The food looked tasty.",
                            "date": "2024-04-13",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94098",
                            "comment_text": "Great pub great crowd ,with 7 televisions you could watch whatever game you wanted . I was there with my grandson and my daughters partner , great day was had by all of us",
                            "date": "2024-05-29",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94099",
                            "comment_text": "This was our 'local' for beers and football in Costa Teguise. As we had such a warm welcome on our first visit, we decided to book a table for an England game. This was done with no fuss at all and we managed to grab a decent table too. It's good fun here when the football's on - mainly because of Ian the Governor. Some of his jokes might need a bit of work though!! There are some simple rules (e.g. no swearing to avoid offense to other customers) but these are explained as soon as you arrive to avoid problems later. Rolls and cake are available at reasonable prices. Very friendly and definitely recommended. Oh, and the beer's cheap too.",
                            "date": "2024-06-21",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9409a",
                            "comment_text": "Told immediately by the owner to get our drinks off the table and on a mat, didn't even get a hello first! Only served food until 1pm on a big matchday on a limited menu, and only have one lager. Went across the road to Champs, so much better!",
                            "date": "2024-06-03",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9409b",
                            "comment_text": "One of the most friendly bars I've ever come across in all my times abroad. I would recommend this bar to anyone. The quizzes were fun and family friendly, the football was superb and the hosting was top notch. 5*",
                            "date": "2024-06-07",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 32,
                    "_id": "68646fe29b544de5c5c9409c"
                },
                "tags": [
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c9409d"
            },
            "cityUid": "2eebb70ad927f2bc82c387b42ff247b50c7d4696",
            "provinceUid": "6b8d748d12ec4a87668b480f264f1e00ef64db28",
            "regionUid": "9bbc6efb8fffb5e28763fd08b248bbd23034e358",
            "postalCodeUid": "879e6c21e579b1ee945d9dbdbadc7445d20202de",
            "provinceNameNormalized": "laspalmas",
            "nameNormalized": "thedolphininnlanzarote",
            "links": {
                "tripAdvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g659633-d3190043-Reviews-Dolphin_Inn-Costa_Teguise_Lanzarote_Canary_Islands.html",
                "googleUrl": "https://maps.google.es/?cid=8047737407567112677",
                "elTenedorUrl": null,
                "facebookUrl": null,
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf50",
            "restaurantUidentifier": "6dbe04b2207a4ac82c1c8b27f1ac6f9635a995f0",
            "name": "La Campa de los Ingleses · Taberna San Mamés",
            "streetAddress": "Plaza Ingeniero Torres Quevedo 1",
            "numberAddress": "s/n",
            "provinceName": "Vizcaya",
            "regionName": "País Vasco",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99962,
            "evidences": {
                "images": {
                    "total_images": 38,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c9409e",
                            "image_url": "https://imagevault.delectame.com/md5/a74a4ea1bd98e779310fe4656702a069",
                            "date": "2023-10-08",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9409f",
                            "image_url": "https://imagevault.delectame.com/md5/192802ada450c27bc72d86f101e6063f",
                            "date": "2023-05-29",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940a0",
                            "image_url": "https://imagevault.delectame.com/md5/c3463d4e7cca7e20ed30f096ac0ef343",
                            "date": "2023-09-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940a1",
                            "image_url": "https://imagevault.delectame.com/md5/97b775402adb64e13dc24fcb52d46fec",
                            "date": "2024-03-11",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940a2",
                            "image_url": "https://imagevault.delectame.com/md5/a177110a4d204fc395bcd340edb59677",
                            "date": "2023-04-19",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940a3",
                            "image_url": "https://imagevault.delectame.com/md5/4b9c1065ebee07e34bdc0b57df597c0f",
                            "date": "2023-04-16",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940a4",
                            "image_url": "https://imagevault.delectame.com/md5/a2e703d29f068a695f73d2b5d9be7b2e",
                            "date": "2023-09-14",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940a5",
                            "image_url": "https://imagevault.delectame.com/md5/03a9769b61a8c2624066d17eaced099d",
                            "date": "2023-04-16",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940a6",
                            "image_url": "https://imagevault.delectame.com/md5/342527ca471012cdafdf5a21eeb2006e",
                            "date": "2024-02-03",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940a7",
                            "image_url": "https://imagevault.delectame.com/md5/782599f6180c0431cdc8963e69e17ecd",
                            "date": "2024-02-03",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940a8",
                            "image_url": "https://imagevault.delectame.com/md5/0500d0ec1f24b9f838ab7fbff73e4025",
                            "date": "2023-09-12",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940a9",
                            "image_url": "https://imagevault.delectame.com/md5/ac332cdcb623666dfd456ab96846ff47",
                            "date": "2023-01-13",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940aa",
                            "image_url": "https://imagevault.delectame.com/md5/18dc800b3e8d1fb19573a24b83e4f483",
                            "date": "2023-09-12",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ab",
                            "image_url": "https://imagevault.delectame.com/md5/5e50f6c76ecc990f8d247d8c191a491a",
                            "date": "2024-02-01",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ac",
                            "image_url": "https://imagevault.delectame.com/md5/f046b843c0e936dcd4c8bb005f550a75",
                            "date": "2024-02-01",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ad",
                            "image_url": "https://imagevault.delectame.com/md5/da08cc49b622d92e3cc5bcb2725c339a",
                            "date": "2023-11-21",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ae",
                            "image_url": "https://imagevault.delectame.com/md5/05932d0935eb43c68056132cad7bc046",
                            "date": "2024-02-01",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940af",
                            "image_url": "https://imagevault.delectame.com/md5/8b7209a87c5da365aff644d1484a3354",
                            "date": "2023-04-09",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940b0",
                            "image_url": "https://imagevault.delectame.com/md5/4b0fc57d036e9fb96600f4af1f6f09ed",
                            "date": "2024-02-01",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940b1",
                            "image_url": "https://imagevault.delectame.com/md5/592d538d90f7cfbb47be513039eb2bf8",
                            "date": "2023-03-29",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940b2",
                            "image_url": "https://imagevault.delectame.com/md5/bb371a549877ef166c10e50e6913855e",
                            "date": "2023-08-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940b3",
                            "image_url": "https://imagevault.delectame.com/md5/daf106acfa4cad6748db4423e2d5b075",
                            "date": "2024-01-13",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940b4",
                            "image_url": "https://imagevault.delectame.com/md5/208be95ac08fd3ce89dd061b58168fa7",
                            "date": "2023-07-28",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940b5",
                            "image_url": "https://imagevault.delectame.com/md5/4d8142dcd788a1a1c260eda33f1c3270",
                            "date": "2023-07-28",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940b6",
                            "image_url": "https://imagevault.delectame.com/md5/f062da2668c1aa4f88cf3a531a044138",
                            "date": "2023-12-05",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940b7",
                            "image_url": "https://imagevault.delectame.com/md5/07044c0291fc30e9c3ff5995010c71c5",
                            "date": "2023-12-05",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940b8",
                            "image_url": "https://imagevault.delectame.com/md5/000179870f974f46e83a2e8ff0eb81e9",
                            "date": "2023-12-05",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940b9",
                            "image_url": "https://imagevault.delectame.com/md5/eabd6e1e332d5362793f91249980436e",
                            "date": "2023-07-14",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ba",
                            "image_url": "https://imagevault.delectame.com/md5/499ec7b59d18bac9ce783b55c30bd782",
                            "date": "2023-07-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940bb",
                            "image_url": "https://imagevault.delectame.com/md5/486bdf96e42c0ae0965ac0039bdc81e1",
                            "date": "2023-05-29",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940bc",
                            "image_url": "https://imagevault.delectame.com/md5/5b7af67df209e3d5fd25ca71e3ea9c4a",
                            "date": "2022-11-09",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940bd",
                            "image_url": "https://imagevault.delectame.com/md5/0a9d561aafe88121c02aee27a385d04f",
                            "date": "2022-11-09",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940be",
                            "image_url": "https://imagevault.delectame.com/md5/d0eeb99e35fea5ab93df4f899d232156",
                            "date": "2022-10-22",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940bf",
                            "image_url": "https://imagevault.delectame.com/md5/c27633c825f9f80a49a2e76958fc299c",
                            "date": "2022-10-18",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940c0",
                            "image_url": "https://imagevault.delectame.com/md5/8940bfe74c90a9159a73e878a1ef808f",
                            "date": "2022-10-18",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940c1",
                            "image_url": "https://imagevault.delectame.com/md5/7e746fae9998687234f07c015808c31f",
                            "date": "2022-10-12",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940c2",
                            "image_url": "https://imagevault.delectame.com/md5/80632b97353d1aef15239679ee3a65ae",
                            "date": "2022-09-19",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940c3",
                            "image_url": "https://imagevault.delectame.com/md5/f4dc7e6988db6313508a18f8cd4779f1",
                            "date": "2022-08-28",
                            "label": "tv with soccer"
                        }
                    ],
                    "soccer_images_count": 20,
                    "_id": "68646fe29b544de5c5c940c4"
                },
                "comments": {
                    "total_comments": 18,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c940c5",
                            "comment_text": "Bar futbolero con vistas al campo de San Mamés",
                            "date": "2022-09-27",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940c6",
                            "comment_text": "Buena cafetería,dentro del estadio de SAN MAMES. PUEDES CONSUMIR SENTADO (o de pie) Con vista al terreno de juego. Buen servicio. Durante los partidos CERRADO",
                            "date": "2022-09-23",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940c7",
                            "comment_text": "Buen sitio donde picar y tomar algo disfrutando de las vistas futboleras.....!",
                            "date": "2022-09-08",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940c8",
                            "comment_text": "Mirador interior espectacular. Peculiar silla con ruedas en la barra. Atencion maxima del personal . Espacios amplios que lo hacen imprescindible para los buenos aficionados al futbol. La restauracion esta trabajada y no se dedica a rellenar el hueco ....",
                            "date": "2022-10-14",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940c9",
                            "comment_text": "No puede ser que en el bar de San Mamés se empiece a retransmitir el partido del Athletic con el Sevilla pasados 15 minutos una vez empezado el partido perdiendonos incluso algún gol del encuentro. Mala organización y cierta incompetencia del personal para programar el partido, increíble, eso sí, no se verá el partido pero el servicio en barra sin parar. Que mínimo que el encargado habría pedido disculpas a las personas que llevamos tiempo en las mesas. Somos clientes asiduos y la imagen de hoy nos ha parecido nefasta. Oso txarto.",
                            "date": "2022-10-08",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ca",
                            "comment_text": "La comida no la he probado Buen lugar para ver futbol,en el mejor estadio del mundo.",
                            "date": "2022-10-22",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940cb",
                            "comment_text": "Very relaxing and friendly environment not sure if it would be like this on match days. Spacious with great view of the football pitch the bar staff were helpful and chatty as a football fan I was in my element.",
                            "date": "2023-01-13",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940cc",
                            "comment_text": "Muy recomendable para cualquier aficionado al fútbol, puesto que puedes tomar algo o desayunar con vistas al graderío y campo de San Mamés. La calidad de lo que hemos escogido para desayunar no fue la mejor, pero merece la pena el sitio por donde está situado.",
                            "date": "2023-04-09",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940cd",
                            "comment_text": "sitio espectacular para disfrutar del fútbol los días de partido y los que no, sobre todo si tu equipo es el atletic de bilbao, disfrutamos de unos pinchos y pudimos ver el campo desde sus ventanales.",
                            "date": "2023-04-11",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ce",
                            "comment_text": "Bonito sitio, con espectaculares vistas para los Athletizales. O futboleros en general. Con una buena relación calidad precio. Espacioso y decorado como sería de esperar,  pues está dentro del estadio de San Mames.",
                            "date": "2023-07-19",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940cf",
                            "comment_text": "Sitio para los aficionados del Athletic donde tomar una cerveza viendo el campo de fútbol de San Mamés",
                            "date": "2023-08-06",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940d0",
                            "comment_text": "Para los futboleros muy original, buena atención y desayunamos a buen precio\nLos niños encantados, puedes ver el campo mientras desayunas",
                            "date": "2023-08-02",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940d1",
                            "comment_text": "Local donde podrás empaparte en fútbol y en especial en el Athletic. Puedes ver insitu el estadio por dentro mientras comes o te tomas un café.",
                            "date": "2023-09-18",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940d2",
                            "comment_text": "Local situado en Bilbao en su mítico San Mamés, campo de juego del Athletic, decir que tiene una pequeña barra en la parte de abajo con mesas exteriores, subiendo unas escaleras llegas al meollo de la cuestión, bar grande, decorado con motivos del Athletic, amplio con gran variedad de pintxos y lo mejor de todo con mesas en las que se puede ver el campo de fútbol( maravilloso) buen café, atención correcta, dan menús ,muy luminoso y moderno buena limpieza, solamente por las vistas pasate y disfruta, los días de partido tapan las vistas del campo",
                            "date": "2023-09-12",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940d3",
                            "comment_text": "Se está muy bien en esta bar además estás viendo estadio de San Mamés y a parte puedes ver en directo los partidos y de todas las veces que he estado a aquí es increíble y lujoso y me encanta muchísimo de estar a aquí",
                            "date": "2023-11-05",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940d4",
                            "comment_text": "Está muy bien para tomar y picar algo con amplias vistas al interior del estadio. Cerrado durante la celebracion de los partidos, como es normal..., la vista de campo desde aquí es prácticamente total.",
                            "date": "2023-12-12",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940d5",
                            "comment_text": "Spent an afternoon/evening here just relaxing.  Football on big screen tv's. Great food, drinks and coffee. Very relaxed and welcoming atmosphere.  Staff were very friendly and despite our attempts at speaking Spanish, turns out their English was better",
                            "date": "2024-01-25",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940d6",
                            "comment_text": "Espectacular cafetería en la k puedes ver el desarrollo del partido de fútbol mientras te tomas una consumición.",
                            "date": "2024-02-03",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 10,
                    "_id": "68646fe29b544de5c5c940d7"
                },
                "tags": [
                    "bar deportivo",
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c940d8"
            },
            "cityUid": "a74e6d00f18dc8b307e64c3e3e702f4f33961b99",
            "provinceUid": "02c5df21bdcf8733077ac8e291f8bae6c3c3a383",
            "regionUid": "f0b0a6b6aecd69da00d4f32b0062a2bed941c2f5",
            "postalCodeUid": "f8cef71c03ec4ffe21be64de6d383c92cd1db393",
            "provinceNameNormalized": "vizcaya",
            "nameNormalized": "lacampadelosingleses·tabernasanmames",
            "links": {
                "tripAdvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g187454-d10546417-Reviews-La_Campa_de_los_Ingleses-Bilbao_Province_of_Vizcaya_Basque_Country.html",
                "googleUrl": "https://maps.google.es/?cid=8260119134467911675",
                "elTenedorUrl": null,
                "facebookUrl": "https://www.facebook.com/tabernacampaingleses/",
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": "https://www.yelp.com/biz/la-campa-de-los-ingleses-bilbao",
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf51",
            "restaurantUidentifier": "b7702e0c95476a0b6c20c3e562e0458e649bbf08",
            "name": "Coco's Sports Bar",
            "streetAddress": "Pasaje del águila",
            "numberAddress": "1",
            "provinceName": "Málaga",
            "regionName": "Andalucía",
            "status": "OPERATIONAL",
            "potential_ratio": 99.9996,
            "evidences": {
                "images": {
                    "total_images": 18,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c940d9",
                            "image_url": "https://imagevault.delectame.com/md5/20338dc4a8bedb6127245038974793cc",
                            "date": "2023-05-09",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940da",
                            "image_url": "https://imagevault.delectame.com/md5/f0e53a2fddb2f2032eb17119fe745cef",
                            "date": "2023-06-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940db",
                            "image_url": "https://imagevault.delectame.com/md5/c9b3a5e0b53ddc26410b0b3c07769fe2",
                            "date": "2023-02-05",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940dc",
                            "image_url": "https://imagevault.delectame.com/md5/5cdbb63d5c3a09826eda12c3d9d866f5",
                            "date": "2023-06-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940dd",
                            "image_url": "https://imagevault.delectame.com/md5/d61f59da7b7b87779d82f32a3086ef13",
                            "date": "2024-06-25",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940de",
                            "image_url": "https://imagevault.delectame.com/md5/57467c68c612179716990f86d2e44a98",
                            "date": "2024-02-13",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940df",
                            "image_url": "https://imagevault.delectame.com/md5/a2cdd10d1b6f7c6d0e80e8485013db9f",
                            "date": "2024-03-29",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940e0",
                            "image_url": "https://imagevault.delectame.com/md5/78d1ac2df4b960f96a0b477878c939e6",
                            "date": "2022-12-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940e1",
                            "image_url": "https://imagevault.delectame.com/md5/ba402f71ce949164e4faba80cb008861",
                            "date": "2022-12-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940e2",
                            "image_url": "https://imagevault.delectame.com/md5/6a0eba6ac1e504b6f9846b27ff6ecec5",
                            "date": "2022-12-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940e3",
                            "image_url": "https://imagevault.delectame.com/md5/4626e9328270befe79fc0d178c2a759f",
                            "date": "2022-12-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940e4",
                            "image_url": "https://imagevault.delectame.com/md5/0b0844094beadb7a5160c068d5799ce2",
                            "date": "2022-09-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940e5",
                            "image_url": "https://imagevault.delectame.com/md5/3dc248a8e775c938f98f8c14c7eb42e6",
                            "date": "2022-09-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940e6",
                            "image_url": "https://imagevault.delectame.com/md5/beaf13e5f73f09940e71e7fd981fb96c",
                            "date": "2022-09-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940e7",
                            "image_url": "https://imagevault.delectame.com/md5/33bc5075971515d3a88aa35e6ef794e7",
                            "date": "2022-09-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940e8",
                            "image_url": "https://imagevault.delectame.com/md5/45c51cd7f6a084d02e1b6c05081c9aba",
                            "date": "2022-12-28",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940e9",
                            "image_url": "https://imagevault.delectame.com/md5/69ac507c8b68df003a51871aa2b3f173",
                            "date": "2022-11-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ea",
                            "image_url": "https://imagevault.delectame.com/md5/25e4faf3504e6e246a8c44a63b2b2c11",
                            "date": "2022-12-04",
                            "label": "tv"
                        }
                    ],
                    "soccer_images_count": 1,
                    "_id": "68646fe29b544de5c5c940eb"
                },
                "comments": {
                    "total_comments": 39,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c940ec",
                            "comment_text": "Unos \"desayunos\" ingleses e irlandeses bestiales que los tienen hasta las 18H y que para almorzar van muy bien. Buenas comidas en general y los helados muy grandes comparado con el precio. Muchas televisiónes con emisión de deportes y las camareras bastante buenas.",
                            "date": "2022-08-02",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ed",
                            "comment_text": "Service is slow and you don't want to be Scottish Welsh or Irish on game day unless of course you want to watch English football even the likes of Huddersfield and tranmere rovers seem to out rank rangers or Cardiff on their screens. Dissapointing overall but do serve big portions of food if you are willing to wait for it",
                            "date": "2022-08-16",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ee",
                            "comment_text": "Popped in here as it was local to our hotel and it looked busy, always a good sign, right? Got in no one showed their face all busy talking at the bar so we grabbed a couple of menus and sat ourselves down, waited for someone to come take our drinks order. This was speedy, I ordered hotdog and chips my partner had the ribs, I always stick to what you can’t go wrong with in Spain as everywhere I go it’s awful regardless what you eat. \n\nHot dog and chips cock on. Ribs were horrendous, cold, grey and chewy. Didn’t get asked if food was ok or for other drinks after food came out. Suppose it would be ok for beer and to watch football. \n\nStick to burgers and hotdogs if you go and you’ll be ok. Portion sizes are huge!",
                            "date": "2022-09-09",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ef",
                            "comment_text": "Came here a couple of times during our stay to watch the football. The tapas they offer isn't spanish, but it's cooked real well - chicken, potatoes etc, very nice. Had dinner once which was nice - we normally eat at spanish restaurants but wanted to watch the football which was at dinner time - decent quality. Only reason I'm giving it a 4 and not a 5 is that 2nd time we were here service wasn't very good - they were short staffed which is unfortunate but no one came round to take our drinks order, so we paid up and left. \nDecent place to get a few beers and food and watch the football.",
                            "date": "2022-09-03",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940f0",
                            "comment_text": "We went in here for lunch and a pint before we checked into our villa, we then went back to watch the football on Saturday and Sunday so all good apart from the football result. Please give it a go for the food, football and of course the Guinness.",
                            "date": "2022-09-06",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940f1",
                            "comment_text": "Great spot for breakfast and watching sport, nice clean place, nice staff good selection of drinks at reasonable prices. ",
                            "date": "2022-10-16",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940f2",
                            "comment_text": "Great staff, very friendly and international, the meals are huge, good and value for money and if you like football this is the place for you",
                            "date": "2022-10-20",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940f3",
                            "comment_text": "First of all, this is a sports bar while football is on. Every UK prem match is shown here, so a multitude of TVs and many passionate fans from different clubs. Great for me I didn't miss a match all holiday. So be prepared it can get loud but NEVER rowdy. Now for the food, breakfast amazing, Steak pie to die for, Lasagne like home cooked, Chicken chips and gravy with proper gravy, yes me and Mrs T tried them all.  Just around the corner from we often stay in Benalmadena. Very efficient service by friendly staff and the meals are so big I asked if there was a prize if I ate it all. Excellent value for money",
                            "date": "2022-10-25",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940f4",
                            "comment_text": "Bar de toda la vida, genial para ver futbol con gran ambiente inglés...",
                            "date": "2022-10-24",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940f5",
                            "comment_text": "Good for football and nice staff. Lagers are typical for Spain.",
                            "date": "2022-10-27",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940f6",
                            "comment_text": "Great place to watch sports. Food is served in bog portions so good value for money. Staff very friendly and interactive",
                            "date": "2022-11-18",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940f7",
                            "comment_text": "Ate here many times in the past and back twice again this year. Food was good as always with good prices and big portions. Staff friendly and helpful. Good for watching the football and also people watching passing by. Only negative is the constant flow off looky looky men",
                            "date": "2022-11-08",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940f8",
                            "comment_text": "Haven’t been here since pre-Covid,still good atmosphere.Good to catch up with Nick the owner again.The two young men who serve you all night are absolute 10 out of 10.Then you have the older guard women (LOL) who keep it all running smoothly also 10 out of 10.\nBeer good \nFood good\nFootball good\nAtmosphere good\nComing back in June can’t wait",
                            "date": "2022-12-03",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940f9",
                            "comment_text": "Buen sitio para echar unas cervezas mientras ves un partido o para jugar al billar con los amigos, servicio excelente y ambiente acogedor",
                            "date": "2023-02-16",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940fa",
                            "comment_text": "We visited Feb 23 as a family of 8, the weather wasn’t great so spent a fair bit of time here watching football, listening to music, a few card games and pool. The food was pretty good quality and the service was exceptional. Never had to move or ask for a drink as Sally there was always on hand. \nWould recommend if that side of town.",
                            "date": "2023-02-20",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940fb",
                            "comment_text": "If you want footy this is the place or infact a sunny spot with decent food at an affordable price and good service!  football matches streamed, there is several tvs showing a mix of games and outdoor seating as sun trap! My boys were chuffed having the footy, as were they with the food portions! Crickey....never the less wonderful grub if you fancy some home cooked bits but also offered mini tapas plates at affordable prices with a view of the sea to top it off! Infact I can back half a stone heavier that's for sure the food was that comforting! Amazing nachos and chilli cheese poppers, as are the burgers- the chilli popper was my fave with chips and coleslaw... (can definitely be shared could just about fit my jaw around it!) So I agree with previous post of America portions. Same with sons fresh fish and chips... was larger than my son's head! My partner and eldest son are big eaters and the dishes were a challenge to food coma point but left full satisfied and certainly hit the spot. The menu is varied and we couldn't resist starters to share x2 for 5 of us.  What a fatal mistake...super tasty but filling! On the menu they offer children's portions of meals and family friendly in general removing items and swapping bits off fussy younger eaters. we went one eve and one daytime(both weekdays out of term time) the weekend we passed looked lively with a stag and hen besides this cannot comment! Staff very helpful at finding us a table outside as a family of 5 and also very swift service! Many thanks Guys!",
                            "date": "2023-04-25",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940fc",
                            "comment_text": "Good to watch the football cheap enough tasty chicken burger",
                            "date": "2023-04-06",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940fd",
                            "comment_text": "Grwat bar with a good selection of drinks and a huge menu for food catering for everyone. Very speedy service as well. Never seen as many TV's in a bar before so it is definitely the best place to go to watch the football; not a seat in the place without a view of a TV.",
                            "date": "2023-05-09",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940fe",
                            "comment_text": "If you like big meals this is the place for you food galore great selection of drinks friendly helpful staff, sports channels for matches",
                            "date": "2023-05-10",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c940ff",
                            "comment_text": "As the name states it’s a Sports Bar with plenty of screens to watch and obviously may get loud from supporters of teams etc   But as said by a previous visitor the food is tasty with a good selection of drinks. We had the kebab and 5 Tacos with San Miguel (sorry only photo of kebab). The tacos had chorizo, pork salsa and a side salad.  The service was also good and for a sensible price. It had space outside with sea / beach view across the road. The only slight drawback was the toilets are small.",
                            "date": "2023-05-03",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94100",
                            "comment_text": "Loved this place, came every morning for breakfast, very reasonable and very good food, staff are very friendly and helpful, great for watching sports as there are multiple screens all over the place, would definitely recommend it.",
                            "date": "2023-05-30",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94101",
                            "comment_text": "Went there to watch Ireland in the woman's World Cup. Every table (inside) had its own TV. The food was ok but well priced. Was busy, but the staff didn't rush you and were very nice. For some reason, they allow street vendors to come in to sell their stuff, which is annoying but otherwise, it was a nice visit. Will return for the next match.",
                            "date": "2023-07-20",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94102",
                            "comment_text": "A great place to watch the football and have a few drinks. Could do with air-conditioning, as was a little hot inside.",
                            "date": "2023-08-14",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94103",
                            "comment_text": "Visited to watch football orders two cocktails one strawberry daiquiri and one mojito both served with no alcohol we asked for bill and left the drinks un drunk bill was 18 euro gave the girl 20 she didn’t return with our 2 euro .",
                            "date": "2023-09-21",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94104",
                            "comment_text": "Cocktails with no alcohol, 45 min wait time for food, dry and bland chicken, caesar salad with half the portion being peppers? I mean… half a plate of peppers? At least put it on the menu if it includes peppers, last time I checked, normal caesar salads don’t contain peppers. Don’t make me wait that long for food for it to be disappointing. Trying to keep it short and sweet, but this place was a big letdown. Sports bar atmosphere is definitely there, go for drinks and watch a game if you’re into that. Don’t recommend if you’re looking to get a quick bite to eat and have a pleasant time during it. *No complaints about the service itself, servers only have so much control over what and when something comes out of the kitchen/bar.",
                            "date": "2023-09-23",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94105",
                            "comment_text": "Busy bar   some good drinks deals , good if you want to watch the footy",
                            "date": "2023-09-05",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94106",
                            "comment_text": "Visited to watch the Tyson Fury boxing as we were staying up the road and had Cocos recommended.\nContacted them before travelling to Spain and again a few days before and had it confirmed the boxing would be on.\nGot there at 7pm and it was very busy with people watching the football. Some really nice customers but the staff and service some of the worst I've dealt with.\nWe waited at the bar to get a table with a screen. Long wait at an empty bar to be served as bar staff and waiting staff decide to throw ice at each other instead of serve customers. We had to request menus to look at despite telling the waiter we were wanting to eat on arrival. When we eventually got seated by a very rude waiter nobody turned up to take food or drinks orders until we waved them down.\nWhen ordering food and deciding I wanted to add a side on last minute the waiter stopped me mid sentence with \"I think you've ordered enough already\". I finished the order anyway with him adding the side on but it never showed up at the table even though they tried adding it onto the bill.\nDrinks ordered at the same time as food didn't turn up until I again waved a waiter down (after we'd finished eating) to ask where our drinks were.\nMy first 2 pints of cider were lovely full ice cold pints. Pint number 3 had 1 huge ice cube in, pint 4 had 2 huge ice cubes in - must have been no more than half a pint.\nWife enjoyed her steak and sauce, ribs and fajitas were nice. Chips were tasteless and dry, side salad was bland. Can't comment on the mozzarella sticks as they never turned up.\nIt was our first trip to Benalmadena and loved it all except our visit to coco's.",
                            "date": "2023-10-29",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94107",
                            "comment_text": "Nice terrace to have drinks and food.nice location.plenty TV screens to watch various football games at the one time.",
                            "date": "2024-01-23",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94108",
                            "comment_text": "El bar perfecto para ver fútbol, escuchar música tomar unas pintas, jugar un billar lo tienen todo y el trato del jefe y los camareros inmejorable",
                            "date": "2024-02-24",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94109",
                            "comment_text": "Been visiting Cocos for nearly 20 years and it never changes. Staff are always great, loads of TVs to watch sport on and great food at very reasonable prices. Stays on my visit list. Hope to be back again later this year",
                            "date": "2024-02-23",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9410a",
                            "comment_text": "Great bar for watching all sports, plus music when the sport isn't on. Met the owner Nick, he was a really nice guy. The food was so cheap but delicious, and the portions are MASSIVE. The beer was really cheap too. Will definitely return before we leave . ",
                            "date": "2024-03-10",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9410b",
                            "comment_text": "This sports bar has tv1s everywhere showing all major football racing and other sports all around the  bar. Outside too.",
                            "date": "2024-03-28",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9410c",
                            "comment_text": "A mad but fantastic pub. Lots of sport on so if you need to watch your team while over here then coco's is a good bet.",
                            "date": "2024-04-11",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9410d",
                            "comment_text": "Big thanks to Cameron and the other guys for being welcoming .. we went here nearly every evening as it was child friendly, spotlessly clean and had a pool table and all the football … also food delicious … we will be back !!!  Linda Jayden and Lisa 🥰",
                            "date": "2024-04-26",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9410e",
                            "comment_text": "Lovely English breakfast and good place to watch the football in the evening! Highly recommend",
                            "date": "2024-04-18",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9410f",
                            "comment_text": "A great place to come and watch sports on TV, there's plenty of TV's around (18 I believe!) all showing various sports at the same time. If coming to watch a football match with the family, be sure to come with plentiful time to get a table with a view of a TV as it fills up pretty quickly. The food arrived pretty quickly and the prices aren't too shabby. Probably cheaper than your average seaside sports bar in the UK and the bucket deals on bottled beers are extremely reasonable and worth it. Kids meals are a bargain at €5.95 for a meal or €6.95 for a meal deal which comes with a drink and ice cream for dessert.",
                            "date": "2024-04-07",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94110",
                            "comment_text": "Muy buenas ofertas sobretodo en cervezas y comidas tipo snack frente al mar, estupendo ambiente y deporte en directo. D",
                            "date": "2024-04-29",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94111",
                            "comment_text": "Came to watch a boxing match early hours of the morning. Can fault the bar or bar staff but certainly an interesting crowd hanging out there … not for the faint hearted!",
                            "date": "2024-04-27",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94112",
                            "comment_text": "OK, to watch the football if u get a table outside as it's way too hot inside ..",
                            "date": "2024-05-19",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 30,
                    "_id": "68646fe29b544de5c5c94113"
                },
                "description": {
                    "description_text": "Desayuno inglés, carta ecléctica y ambiente internacional en bar con billares y pantallas para ver deportes.",
                    "label": "soccer_description",
                    "_id": "68646fe29b544de5c5c94114"
                },
                "tags": [
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c94115"
            },
            "cityUid": "64f24e4938b37a76c2df0701a58707384462b8a7",
            "provinceUid": "a41f1b2b208845e7049484ea1eee0f07adc51044",
            "regionUid": "398947b6fd59937c62d03b1a2a2e08c1ef3b0aef",
            "postalCodeUid": "796ed8bf171b3a93cbb9ca967d130a99711824ce",
            "provinceNameNormalized": "malaga",
            "nameNormalized": "coco'ssportsbar",
            "links": {
                "tripAdvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g562812-d3210666-Reviews-Cocos_sports_bar-Benalmadena_Costa_del_Sol_Province_of_Malaga_Andalucia.html",
                "googleUrl": "https://maps.google.es/?cid=1041686230060328359",
                "elTenedorUrl": null,
                "facebookUrl": "https://m.facebook.com/cocos.benalmadena/",
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": "https://www.yelp.com/biz/cocos-sports-bar-benalmádena-2",
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf52",
            "restaurantUidentifier": "b8ca1f6042ec685518b8957d0f2ce9f6fb588a3f",
            "name": "Pub restaurante Seven Pints",
            "streetAddress": "centro comercial plaza, Locales 14/15/16 /17",
            "numberAddress": null,
            "provinceName": "Las Palmas",
            "regionName": "Canarias",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99954,
            "evidences": {
                "images": {
                    "total_images": 17,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c94116",
                            "image_url": "https://imagevault.delectame.com/md5/f5b7735a41f848cba932373f071384e8",
                            "date": "2023-04-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94117",
                            "image_url": "https://imagevault.delectame.com/md5/2cd94d8b06dff93b5232a5f557524cc9",
                            "date": "2023-04-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94118",
                            "image_url": "https://imagevault.delectame.com/md5/fb45ef653001fb397ccb037bc6f9d635",
                            "date": "2023-01-29",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94119",
                            "image_url": "https://imagevault.delectame.com/md5/7eeabc7c510546efbc5bc33d6d5706de",
                            "date": "2024-01-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9411a",
                            "image_url": "https://imagevault.delectame.com/md5/7eda81f3d2b0432b582a342baa3c2b4c",
                            "date": "2024-01-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9411b",
                            "image_url": "https://imagevault.delectame.com/md5/bed7998549d1fca28fcda666b4023145",
                            "date": "2023-12-24",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9411c",
                            "image_url": "https://imagevault.delectame.com/md5/1c5fe613c57d4523d73563715f511d68",
                            "date": "2024-01-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9411d",
                            "image_url": "https://imagevault.delectame.com/md5/18d17be22fd19386d08bee849f189676",
                            "date": "2024-06-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9411e",
                            "image_url": "https://imagevault.delectame.com/md5/5ece1508e201bf64c79a8015be0fa8ab",
                            "date": "2023-12-09",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9411f",
                            "image_url": "https://imagevault.delectame.com/md5/84d370431dbf241dac24eaceaab6f425",
                            "date": "2024-06-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94120",
                            "image_url": "https://imagevault.delectame.com/md5/07dcb2692d9ba76d60428b723642f99d",
                            "date": "2024-02-01",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94121",
                            "image_url": "https://imagevault.delectame.com/md5/a822c31b3df909f8b3f09b0043fd2526",
                            "date": "2022-11-30",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94122",
                            "image_url": "https://imagevault.delectame.com/md5/80d32cc92adc7dd091f7af88c9665731",
                            "date": "2022-08-05",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94123",
                            "image_url": "https://imagevault.delectame.com/md5/7af99c37de36c4ee1d30d7f128efc673",
                            "date": "2022-08-05",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94124",
                            "image_url": "https://imagevault.delectame.com/md5/df81ae0bf6a93d334cd6f030afeb999e",
                            "date": "2022-08-05",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94125",
                            "image_url": "https://imagevault.delectame.com/md5/6420da3afdcc26d62c90651f76013884",
                            "date": "2022-08-05",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94126",
                            "image_url": "https://imagevault.delectame.com/md5/f916c245ecf3459060dd8ec75a0330a8",
                            "date": "2022-08-05",
                            "label": "tv"
                        }
                    ],
                    "soccer_images_count": 6,
                    "_id": "68646fe29b544de5c5c94127"
                },
                "comments": {
                    "total_comments": 38,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c94128",
                            "comment_text": "I don't like giving bad reviews but this was our second visit to this pub and the first wasn't great but the food was good so ignored the bad service, so gave it another try only to be told that the table we were sitting in was reserved no problem only about 2/3 tables were available at the back of the pub where it was uncomfortably hot. A large group had booked most of the tables for the football match on TV. I get it that they need the money right now like everywhere else but to totally ailianate everyone else is not a good thing to do , we were in early and could have been out within an hour or so. Will not be back .",
                            "date": "2022-08-28",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94129",
                            "comment_text": "The seven pints is a lovely place to sit and have a meal and drink and watch all the live football with helpful and friendly staff",
                            "date": "2022-08-29",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9412a",
                            "comment_text": "Just popped in for a beer and hoped for entertainment But football was on so everyone was transfixed with that Just had the 1 drink and left",
                            "date": "2022-09-10",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9412b",
                            "comment_text": "This is our second visit to Corralejo, and after such a positive experience the first time round 4 years ago at this pub, we decided to go back and see if it was the same. We weren't disappointed! The staff are so friendly and helpful. The food and drinks are reasonably priced, and it is located just off the main street so easily accessible for all. Definitely recommend..and a must for any sports fans as they are always showing football etc on their big screen tvs.",
                            "date": "2022-10-27",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9412c",
                            "comment_text": "Good place to watch the football",
                            "date": "2022-10-14",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9412d",
                            "comment_text": "Really friendly team, serving good, well priced food & drinks, and shows football on TV. Everything you want from a pub.",
                            "date": "2022-10-24",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9412e",
                            "comment_text": "Good place to.watch the footy",
                            "date": "2022-10-18",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9412f",
                            "comment_text": "Buen sitio para ver el futbol",
                            "date": "2022-11-29",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94130",
                            "comment_text": "Excellent steak. Came in to watch the footy (blues) and have some food. I had the sirloin steak cooked medium. It was a chunky piece that was probably more medium rare than straight medium. Which is fine as I usually have rare but in unknown restaurants have medium just incase.. the steak was absolutely perfect. They let it rest fully.  Probably one of the best steaks I've had in years and I really like a steak ! Hubby had fish and chips which he said was really nice too. It looked tasty. I passed my compliments on to the chef Marcel by Kim our server who is lovely and helpful.  I would totally recommend this place for food. ",
                            "date": "2022-11-11",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94131",
                            "comment_text": "Good for watching sport Didn't have a decent bitter on the pumps",
                            "date": "2022-12-13",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94132",
                            "comment_text": "Watched the England v Iran game here. Had a great breakfast pre game and enjoyed a few beers. Had a table booked to view game , service was great and all reasonably priced.",
                            "date": "2022-12-03",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94133",
                            "comment_text": "One of the biggest pubs we went into. Great atmosphere, friendly Staff. Great for watching sports  a lot of TV. Didn't have food but look good and reasonably priced.",
                            "date": "2023-03-19",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94134",
                            "comment_text": "Great food and great choice of beers. If you want to watch sport, I'd recommend this place.",
                            "date": "2023-04-04",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94135",
                            "comment_text": "Nice bar to watch football and meet other holiday people. Bar caters for English, Irish and Scottish. Would return",
                            "date": "2023-04-26",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94136",
                            "comment_text": "Pretty full but great atmosphere, loads of tv football, drag act 3 times a week was probably the best entertainment I have seen in Corallejo... Really entertaining. ????????",
                            "date": "2023-04-29",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94137",
                            "comment_text": "Soo we are a family of 9 and like to reserve tables for dinner so as not to be disappointed by not being able to get a table to eat after eating here on Monday and Wednesday without insistent we decided to book again for Thursday to watch the match we were the first booking in the book and were actually asked if we'd like the same two tables again to with I replied that would be great as we can place the high chairs for the babies out of the way of people passing and I would have a great view of the match still on arriving the lady behind the bar smiled and pointed toward the tables I said  thank you and headed down to where I found people sitting at our table one eating and one a member of staff with the reserved sign on the table another member of staff asked can I help I said we reserved these tables the sign is there he said will u go somewhere else to which I replied we booked these so we could place the high chairs out of the way and I could still see the match he went and spoke to the people and returned and said something I never expected to hear he said I HOPE YOUR HAPPY NOW I'VE JUST INSULTED TWO PEOPLE FOR YOU said with a smart attitude I replied with I don't expect to be spoken to like this and left before leaving I spoke with the manager who said she'd have a word I have spoken to other restaurants about this and all have said it was unacceptable which is what I taught now we have eating here a few times everytime we come on holidays which is twice yearly  and have never been spoke to like this will liked it because the kids can play outside",
                            "date": "2023-05-19",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94138",
                            "comment_text": "called in for a quick pint on our walk along the main strip (this pub/bar is just off the strip) quick service, only stayed for 1, was like an English pub including football.",
                            "date": "2023-08-21",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94139",
                            "comment_text": "Went twice in oct wasnt expecting much went to watch the footie , the food was lovely and the staff friendly we were earlier than normal it was quiet to start but got busy as the night went on would def return",
                            "date": "2023-10-29",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9413a",
                            "comment_text": "Had a few great evenings in 7 pints as on every visit. Watched the early EPL game on Saturday, Merseyside derby. Nice pints and a nice meal. Staff work very hard when the pub is busy and still remain very pleasant, they deserved a medal the evening of the Rugby.",
                            "date": "2023-10-26",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9413b",
                            "comment_text": "Great bar for watching the football, lots of screens. Good selection of drinks and good entertainment.",
                            "date": "2023-11-22",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9413c",
                            "comment_text": "Cracking pub great place to watch football",
                            "date": "2023-11-30",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9413d",
                            "comment_text": "Nice bar to watch football and meet other holiday people. Bar caters for English, Irish and Scottish. Would return and did today and its still good. 3.30 a pint of tropical",
                            "date": "2023-12-16",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9413e",
                            "comment_text": "Un pub bastante ancho, con mesa de billar, dardos, un par de pantallas para ver deportes y en general muy acogedor. No he comido así que no puedo evaluar con integridad la comida...mi sentí muy a gusto.",
                            "date": "2023-12-21",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9413f",
                            "comment_text": "Stopped for Saturday Arsenal game. Atmosphere: The usual pub, surprisingly quiet on a Sat afternoon (mid Dec). Good location near main street, multiple screens to watch footy, for which they turned the music off. Service: Friendly, helpful, came to check on us a few times, English-speaking. They confirmed our purchases before billing, thumbs up! Food: Good onion rings with good crunch but soft on the inside just as you want it. Drinks: Good Calypso coffee. Beer is beer. Prices: The usual.",
                            "date": "2023-12-09",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94140",
                            "comment_text": "Great place to watch sport and a 20 second walk to a host of eateries",
                            "date": "2023-12-08",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94141",
                            "comment_text": "Seemed OK place shows all the football but I would the guy behind bar bit offish asked him if I could order drinks and said I had to go to bar which is OK then I had to take drinks to table myself mot that I'm that bothered but absolutely everywhere else get offended if you go to bar they come to table and then bring drinks so don't think this is right attitude in this country its like the usual service back in uk! Beer was cold and good tho",
                            "date": "2024-01-10",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94142",
                            "comment_text": "Went there on the 26th of December to watch football and had an awful hamburger. Got sick in the evening and was very sick for two weeks - had to go to hospital and Campylobacter it was the doctor said. I did contact the place on Facebook but got no response! Would never ever go there and would give it 0 star if it was an option.",
                            "date": "2024-01-17",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94143",
                            "comment_text": "Good place to watch the football",
                            "date": "2024-01-17",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94144",
                            "comment_text": "Had a fantastic afternoon watching the football and envying the Sunday roasts. (We had already eaten) service by the staff was excellent.",
                            "date": "2024-01-28",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94145",
                            "comment_text": "Great for football fans",
                            "date": "2024-02-19",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94146",
                            "comment_text": "Great pub for watching sport and playing good beer",
                            "date": "2024-02-12",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94147",
                            "comment_text": "Went in early about 5pm ish to avoid the football crowds and eat in peice. The sausage roll starter was great with the tomato jam perfect. And the fish and chips were a great meal. Had some cocktails r Too. Great pub grub",
                            "date": "2024-03-06",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94148",
                            "comment_text": "Only popped in fir a beer and tovwatch some football and rugby. Got a warm welcome. My wife only really drinks cider, dhe had choice of Magners or Strongbow. Will revisit",
                            "date": "2024-03-09",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94149",
                            "comment_text": "We wanted to watch the Grand Prix starting at 3pm. They told us to come early. We did, by one and a half hours. \n\nWe ordered food. Mine was chicken with freezer pack chips. The chicken was so overcooked it was hard to eat. My partners baked potato was microwaved.  \n\nThey have many screens, but, it turns out, only one sound system. 2 minutes before the start of the race, the TV crashed. After many attempts to fix it, they shrugged their shoulders and changed the channel. \n\nWe got Newcastle versus Wolves, but sound from the Liverpool match. Around 20 peple left within minutes and I’m guessing, won’t be coming back. We certainly wont waste any more time and money.",
                            "date": "2024-03-02",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9414a",
                            "comment_text": "Food was very basic and tasteless, boring menu.\nPoor lighting (unless you want to eat and watch the big screen)\nReally expected better its a place over time loosing its status, shame.",
                            "date": "2024-03-17",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9414b",
                            "comment_text": "Great to watch the footie and love the beer",
                            "date": "2024-03-01",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9414c",
                            "comment_text": "Good football place,and good for families. Got all all the different lager pumps,Stella etc. Buts the same lager coming out of all of them! And a bit pricey.",
                            "date": "2024-04-14",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9414d",
                            "comment_text": "Called in to watch the Leeds v Norwich game and they put a reserve on our prefered table to have a good vantage point for the game while we ate our full English outside. Excellent food and price. Plenty of tables and seating inside and out. Gents toilets clean . Great service, Nice pub",
                            "date": "2024-05-15",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 30,
                    "_id": "68646fe29b544de5c5c9414e"
                },
                "tags": [
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c9414f"
            },
            "cityUid": "5b630eb7294715448b09167b1f80d72f0d6fc9e2",
            "provinceUid": "6b8d748d12ec4a87668b480f264f1e00ef64db28",
            "regionUid": "9bbc6efb8fffb5e28763fd08b248bbd23034e358",
            "postalCodeUid": "3d2ec591ac044b6010adfd341c007a9f9a245a9d",
            "provinceNameNormalized": "laspalmas",
            "nameNormalized": "pubrestaurantesevenpints",
            "links": {
                "tripAdvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g580322-d7307154-Reviews-Seven_Pints_Pub-Corralejo_La_Oliva_Fuerteventura_Canary_Islands.html",
                "googleUrl": "https://maps.google.es/?cid=6224746777987060433",
                "elTenedorUrl": null,
                "facebookUrl": "https://www.facebook.com/sevenpint/",
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf53",
            "restaurantUidentifier": "ff58cc634f171bd2abf1552d38b4e0e49337299d",
            "name": "Reflex Disco Bar & Restaurant",
            "streetAddress": "Paseo mar",
            "numberAddress": "58",
            "provinceName": "Baleares",
            "regionName": "Illes Balears",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99949,
            "evidences": {
                "images": {
                    "total_images": 29,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c94150",
                            "image_url": "https://imagevault.delectame.com/md5/f567458513912455ec1714d5e8e85a27",
                            "date": "2023-08-29",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94151",
                            "image_url": "https://imagevault.delectame.com/md5/b9cee4610cf2b2fdee7e6fc18011b514",
                            "date": "2023-08-29",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94152",
                            "image_url": "https://imagevault.delectame.com/md5/903d24ef1c4e5d8e23255360a78969f6",
                            "date": "2023-08-13",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94153",
                            "image_url": "https://imagevault.delectame.com/md5/5c9029e66a41afe68a76a5d19041201e",
                            "date": "2024-04-14",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94154",
                            "image_url": "https://imagevault.delectame.com/md5/ab40b384cd0cb5330a7610b6583de93f",
                            "date": "2023-07-11",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94155",
                            "image_url": "https://imagevault.delectame.com/md5/6c6d4e89141fe34fd8c012d70bb28e20",
                            "date": "2023-07-11",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94156",
                            "image_url": "https://imagevault.delectame.com/md5/5041281d89534fd9e1142e3bf57c23af",
                            "date": "2024-06-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94157",
                            "image_url": "https://imagevault.delectame.com/md5/b90b251ee7917b7ece5c515f4f4eb3eb",
                            "date": "2024-06-03",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94158",
                            "image_url": "https://imagevault.delectame.com/md5/52cea173b69e780b07641eb9ccd7a7d0",
                            "date": "2024-05-28",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94159",
                            "image_url": "https://imagevault.delectame.com/md5/894ce9afde50cff8756784bc5d3b8328",
                            "date": "2023-07-11",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9415a",
                            "image_url": "https://imagevault.delectame.com/md5/a7397a122555475c1954c12b39ab179f",
                            "date": "2024-05-28",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9415b",
                            "image_url": "https://imagevault.delectame.com/md5/c2916e0c3949cf664c29ba6a571af22a",
                            "date": "2024-04-19",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9415c",
                            "image_url": "https://imagevault.delectame.com/md5/8b9c8b6699cc35f625997163c28b8f72",
                            "date": "2024-04-19",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9415d",
                            "image_url": "https://imagevault.delectame.com/md5/856697e6087110678fce52312c731dfc",
                            "date": "2024-04-19",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9415e",
                            "image_url": "https://imagevault.delectame.com/md5/eb27d2608b73b160ad57699c24cf5a1a",
                            "date": "2023-07-08",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9415f",
                            "image_url": "https://imagevault.delectame.com/md5/52aa1142e75e717f5a7cf3bba688808a",
                            "date": "2023-05-08",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94160",
                            "image_url": "https://imagevault.delectame.com/md5/12fa575f0f66303760bb0a98df4ef615",
                            "date": "2023-05-07",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94161",
                            "image_url": "https://imagevault.delectame.com/md5/28bc12ad9bbd8903e6be1ff786f35399",
                            "date": "2023-05-07",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94162",
                            "image_url": "https://imagevault.delectame.com/md5/baff27ae0b960ec63cd6697667e43ba6",
                            "date": "2023-05-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94163",
                            "image_url": "https://imagevault.delectame.com/md5/8cb5e494bb665749b2e9ab2d1b8cb4c8",
                            "date": "2023-05-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94164",
                            "image_url": "https://imagevault.delectame.com/md5/6232d3d0f67b8de578360ba4c99ac655",
                            "date": "2023-05-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94165",
                            "image_url": "https://imagevault.delectame.com/md5/0884718f34bed0330e816998f0a820b3",
                            "date": "2023-05-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94166",
                            "image_url": "https://imagevault.delectame.com/md5/1bfe240fa8f60ecb2f05d66be90fc2d5",
                            "date": "2023-05-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94167",
                            "image_url": "https://imagevault.delectame.com/md5/66767061cfd0b1de45b52828065a0636",
                            "date": "2024-06-03",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94168",
                            "image_url": "https://imagevault.delectame.com/md5/9ab1a880c6dbecb3d862c86f2ee23b18",
                            "date": "2022-10-23",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94169",
                            "image_url": "https://imagevault.delectame.com/md5/8a11e426538bd42b74f229614cd762b1",
                            "date": "2022-10-19",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9416a",
                            "image_url": "https://imagevault.delectame.com/md5/dfb66ec187ab8a7e5a04db1d308cd313",
                            "date": "2022-10-12",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9416b",
                            "image_url": "https://imagevault.delectame.com/md5/4a0ff0a48f3f3105e62038f03c33fc49",
                            "date": "2022-09-03",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9416c",
                            "image_url": "https://imagevault.delectame.com/md5/714c49fcbdf21d6a7602891b9039813d",
                            "date": "2022-08-05",
                            "label": "tv"
                        }
                    ],
                    "soccer_images_count": 17,
                    "_id": "68646fe29b544de5c5c9416d"
                },
                "comments": {
                    "total_comments": 22,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c9416e",
                            "comment_text": "this place is a total vibe!! lovely to watch football and get a few drinks!!! the cocktails are outstanding and delicious however… the only complaint i have is that service is slow and a bit all over the place!!! have to shout across the room to get some service! haven’t eaten yet here but from what i see the food looks delicious!! staff are very friendly and would 100% recommend for somewhere to chill!!",
                            "date": "2022-08-30",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9416f",
                            "comment_text": "Only came into watch one football match but had a good time and excellent service by staff.",
                            "date": "2022-09-11",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94170",
                            "comment_text": "Great cocktails, huge screen to watch the football, great 80s music, everything you need really. Food looked really good as well.",
                            "date": "2022-09-14",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94171",
                            "comment_text": "Had a nice meal here and a few drinks, nothing to fancy, what you ask for is what you get, quite busy when we went as football was on, would recommend",
                            "date": "2022-10-08",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94172",
                            "comment_text": "Went to this place cause they had the biggest TV around for looking football. Food ok drinks ok, not more, but still a good place watching football. When we were there a rainstorm swept over palmanova beach and the restaurant got soaked. However we managed to stay dry due to sitting straight under the foot of the parasol. The staff did what they could but the rain was to heavy to save everyone.",
                            "date": "2023-03-19",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94173",
                            "comment_text": "Amazing bar/ restaurant! Not too expensive, totally affordable. Me and my partner went here on our first night of our holiday and absolutely loved the atmosphere and of course the big screen with football on, we returned several nights whilst we was staying in palmanova. All staff are friendly, lady on the door is very welcoming. Definitely recommend!",
                            "date": "2023-04-15",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94174",
                            "comment_text": "Loverly venue  , majority of the staff are friendly. What's disappointing is that despite asking which game was on the big screen and getting there the following day 3 hours early , eating there. The lady on the front decide to turn it over after 10 minutes to please half a dozen people who had just come in. Despite there been atleast 6 tables watching the game.  Who all got up and left. As did we. Take what the lady on the front who coughs for England says with a pinch of salt. Good pub grub too.",
                            "date": "2023-05-13",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94175",
                            "comment_text": "Came here on Saturday to watch the Scotland v Norway football match, the bar has a big screen outside and plenty of seats.\n\nService was excellent, very quick to be served.  We also had food,  massive menu.  Portions were huge, I got 7 fish fingers and although they forgot to put peas on the plate it didn't matter as I had so many chips (chunky chips too!). My hubby said the gammon steak was his favourite meal of our 9 night holiday.\n\nGreat value for money and atmosphere too! ",
                            "date": "2023-06-20",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94176",
                            "comment_text": "Only sat down for a coffee to watch the penalties and enjoyed it.",
                            "date": "2023-08-07",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94177",
                            "comment_text": "Jose and his staff are amazing. A place to dance away the night or watch sports for young and old. I can see why my mate has been bringing his family here for over 18 years!!! Great drink, food, huge screen x",
                            "date": "2023-08-13",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94178",
                            "comment_text": "I came to Reflex on a Saturday to watch the later football at 6.30pm local time, I asked if I could sit nearer the screen where the doors and got 2 great Pints of Budweiser which I’d never seen served in Mallorca. I love 80s music and the 80s theme they have and thought the bar inside was really modern. I got a baked potato with tuna which was very tasty and filling. There was plenty of staff when I was there and they were all very warm and polite,  I’m going to come later in the evening next time I come. There really is a great vibe at this bar.",
                            "date": "2023-08-20",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94179",
                            "comment_text": "Went in a few times on our holiday. First time we watched football and had drinks and food. We had Carbonara which I enjoyed. Then we have been in a few times for drinks. The host 'the pope' I found was a laugh. Good banter. Keep up the banter. ",
                            "date": "2023-09-26",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9417a",
                            "comment_text": "Came in to reflex to watch the football with my fiancé, ended up sending most nights at reflex! Thank you to Tom who looked after us. The cocktails were lovely and the snack menu is great late at night! \n\nThe only downful is the shots are overpriced , €4 for an apple sours.. \n",
                            "date": "2023-09-28",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9417b",
                            "comment_text": "Amazing bar with great vibes.\nCame here whilst on our holiday to watch the football.\nWe chose this one because of the big screen TV, and had no regrets.\nStaff very helpful and what stood out the most was how they bounce of each other and work together (that’s the main reason for the 5 stars) \nWe only had drinks as it was our last day so didn’t have time for food but drinks were lovely and reasonably priced.\nI would definitely visit this bar again.",
                            "date": "2023-09-01",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9417c",
                            "comment_text": "Had a few cocktails here beginning of October. Service was great (from Emily) and the cocktails nice and strong too. Had the footy on a huge screen (not that we were bothered watching it). DJ was playing decent music, no idea if it gets busy late night as we went back down to Magaluf around midnight, but would come again next year.",
                            "date": "2023-10-17",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9417d",
                            "comment_text": "Loved this place can't wait to go back. Had food cocktails and watched the football",
                            "date": "2023-10-16",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9417e",
                            "comment_text": "Staff are very friendly and very helpful Food was delicious and the drinks are cheap For football lovers there are plenty of screens to watch the game",
                            "date": "2023-10-14",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9417f",
                            "comment_text": "I never had any food although it looked superb. Watched the football outside on the biggest screen in Palmanova then went inside for a nightclub experience. Best pub/club in Palmanova without a doubt.",
                            "date": "2023-10-24",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94180",
                            "comment_text": "Great evening. Great staff. Accommodating and friendly. Best place in palma nova to watch sport",
                            "date": "2024-04-10",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94181",
                            "comment_text": "Great atmosphere to watch the football, relax & have some fun! The service was absolutely fantastic thanks to Jade! What she lacked in waitressing skills she made up with an amazing personality & a smile. 😃",
                            "date": "2024-04-27",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94182",
                            "comment_text": "Went here with 25 friends, we came in most nights over our weeks holiday, staff are all so friendly and helpful, great choice of drinks available and the food menu is just as good, you can order bar snacks right up to closing time which is good, plenty of big screens to watch sporting events and they staff will accommodate all your needs, thanks again to everyone involved great place to visit.",
                            "date": "2024-05-20",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94183",
                            "comment_text": "Went in because they had a massive TV for the football, but stayed for the atmosphere, cocktails and the service. We ended up in here every night and popped in for food in the day a few times too.\n\nEveryone there was great, but Casey is something else, she made us love it there and we will genuinely miss seeing her, she’s an absolute star who made our holiday better! \n\nWe will definitely be back!",
                            "date": "2024-05-18",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 19,
                    "_id": "68646fe29b544de5c5c94184"
                },
                "tags": [],
                "_id": "68646fe29b544de5c5c94185"
            },
            "cityUid": "5c29f2794163f03a9469c82c60da4d91297ca8c8",
            "provinceUid": "907abf6fbe1a14ac29e9f3fb5408c79c968fb0b9",
            "regionUid": "d74559416c110c2eaea774c77d888c1b22ade8fe",
            "postalCodeUid": "fa28bd09468712e4ea51e7afefa531cd59b02803",
            "provinceNameNormalized": "baleares",
            "nameNormalized": "reflexdiscobar&restaurant",
            "links": {
                "tripAdvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g580306-d11977792-Reviews-Reflex_Disco_Bar_Restaurant-Palmanova_Calvia_Majorca_Balearic_Islands.html",
                "googleUrl": "https://maps.google.es/?cid=15073120759283670667",
                "elTenedorUrl": null,
                "facebookUrl": "https://www.facebook.com/REFLEXDISCOBARPALMANOVA/",
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf54",
            "restaurantUidentifier": "adbec06db9a17ebbbd58ca6880f36e19cffe1ffd",
            "name": "Tequila Lounge",
            "streetAddress": "Avenida de las playas",
            "numberAddress": "41",
            "provinceName": "Las Palmas",
            "regionName": "Canarias",
            "status": "OPERATIONAL",
            "potential_ratio": 99.9987,
            "evidences": {
                "images": {
                    "total_images": 54,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c94186",
                            "image_url": "https://imagevault.delectame.com/md5/7786b31835589e2dff273f9ec86b529e",
                            "date": "2023-04-15",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94187",
                            "image_url": "https://imagevault.delectame.com/md5/9ceb34834996c1967a477ceb12f27b5a",
                            "date": "2023-03-19",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94188",
                            "image_url": "https://imagevault.delectame.com/md5/fd6d62fdc75fb0c31b09e8a5978f9259",
                            "date": "2023-03-19",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94189",
                            "image_url": "https://imagevault.delectame.com/md5/bab738d30deb91b8f99f9d817fa92ded",
                            "date": "2023-03-03",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9418a",
                            "image_url": "https://imagevault.delectame.com/md5/a6e89db9a63064b997c53ca28077d486",
                            "date": "2024-04-08",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9418b",
                            "image_url": "https://imagevault.delectame.com/md5/ddb67a257714562eec164dd7837a903b",
                            "date": "2023-02-28",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9418c",
                            "image_url": "https://imagevault.delectame.com/md5/100ca2f7e3c65f1898a89dedc477c15e",
                            "date": "2024-02-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9418d",
                            "image_url": "https://imagevault.delectame.com/md5/cd53c679fdf1b390fcedd2c54a0a527e",
                            "date": "2024-02-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9418e",
                            "image_url": "https://imagevault.delectame.com/md5/339d94358a8b01f3338dfa9fff43440a",
                            "date": "2024-02-01",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9418f",
                            "image_url": "https://imagevault.delectame.com/md5/913f495417a070eb601bbef4cc480f60",
                            "date": "2023-08-08",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94190",
                            "image_url": "https://imagevault.delectame.com/md5/c326ba7f29d42453b26e6a4fd54794fb",
                            "date": "2023-07-25",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94191",
                            "image_url": "https://imagevault.delectame.com/md5/5b89f707622a9051a1b8bd2812c12433",
                            "date": "2023-06-18",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94192",
                            "image_url": "https://imagevault.delectame.com/md5/a26a76af22c8b6f1ea337cac4add483c",
                            "date": "2023-05-29",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94193",
                            "image_url": "https://imagevault.delectame.com/md5/be20502910019454f976eed4bdb15efa",
                            "date": "2023-05-29",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94194",
                            "image_url": "https://imagevault.delectame.com/md5/0615f967fa0cce32225bee5bb3825f5d",
                            "date": "2023-05-29",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94195",
                            "image_url": "https://imagevault.delectame.com/md5/2421208248dd134dfbe981680d2e4e50",
                            "date": "2023-01-19",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94196",
                            "image_url": "https://imagevault.delectame.com/md5/7bb04bc1af61ae71836f9c4516756578",
                            "date": "2023-01-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94197",
                            "image_url": "https://imagevault.delectame.com/md5/4b3a93958a8db379bea7c00054407d6e",
                            "date": "2023-11-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94198",
                            "image_url": "https://imagevault.delectame.com/md5/f5020a79695555ccaa04f21370472628",
                            "date": "2023-01-19",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94199",
                            "image_url": "https://imagevault.delectame.com/md5/33d30ff8a081f548519a9d6235451306",
                            "date": "2023-01-19",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9419a",
                            "image_url": "https://imagevault.delectame.com/md5/f7452df921f7c711c0617a2adc5e9b2b",
                            "date": "2023-10-25",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9419b",
                            "image_url": "https://imagevault.delectame.com/md5/3c5b4b2f37f9f3e25cbb3aff3526ba4f",
                            "date": "2023-10-25",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9419c",
                            "image_url": "https://imagevault.delectame.com/md5/c950f3d184e9866850a96e87132019c7",
                            "date": "2023-10-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9419d",
                            "image_url": "https://imagevault.delectame.com/md5/fd2e0b2eeafa79cf2521039b4e88f9b7",
                            "date": "2024-04-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9419e",
                            "image_url": "https://imagevault.delectame.com/md5/d52baf40582cb8cbe1b4a498205ab847",
                            "date": "2023-09-26",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9419f",
                            "image_url": "https://imagevault.delectame.com/md5/7f7bc7066f66d11d038ba76063e21ede",
                            "date": "2023-09-26",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941a0",
                            "image_url": "https://imagevault.delectame.com/md5/83fbdf547c618b63eb5bebe3da22e514",
                            "date": "2023-09-26",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941a1",
                            "image_url": "https://imagevault.delectame.com/md5/749368e92583b02f909d3803b8330731",
                            "date": "2024-04-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941a2",
                            "image_url": "https://imagevault.delectame.com/md5/a98fa85a8754ea5837b01ca82c3b131d",
                            "date": "2024-04-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941a3",
                            "image_url": "https://imagevault.delectame.com/md5/15c7cad3bbb37fc1c7ebd4c0b082ec96",
                            "date": "2023-08-31",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941a4",
                            "image_url": "https://imagevault.delectame.com/md5/78a0645821e7ce86fe685f110f63e4b4",
                            "date": "2024-01-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941a5",
                            "image_url": "https://imagevault.delectame.com/md5/b716a695b3bf0f2eb1ce1cd78935ae4e",
                            "date": "2023-07-25",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941a6",
                            "image_url": "https://imagevault.delectame.com/md5/d65b823dea6344be7964edb6b786c205",
                            "date": "2023-06-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941a7",
                            "image_url": "https://imagevault.delectame.com/md5/73be93c0b266e31bb56d6b328bd64618",
                            "date": "2023-06-02",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941a8",
                            "image_url": "https://imagevault.delectame.com/md5/2d5b5dc3623c18e630914f405f989619",
                            "date": "2023-05-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941a9",
                            "image_url": "https://imagevault.delectame.com/md5/dbac77068f2f29a673be1dde9168d95f",
                            "date": "2022-11-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941aa",
                            "image_url": "https://imagevault.delectame.com/md5/abe60ced91dd7051443ec3208f311309",
                            "date": "2022-11-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ab",
                            "image_url": "https://imagevault.delectame.com/md5/b97ff0cdb1c089fc6c168b9bee77ba42",
                            "date": "2022-10-22",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ac",
                            "image_url": "https://imagevault.delectame.com/md5/9bf2b4206dadb7d26df444b7e8b492ed",
                            "date": "2022-12-11",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ad",
                            "image_url": "https://imagevault.delectame.com/md5/5f4bab27cba1c553a976511d1e2db05d",
                            "date": "2022-09-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ae",
                            "image_url": "https://imagevault.delectame.com/md5/1689f58351cd70afdd8a2fc076db308d",
                            "date": "2022-09-11",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941af",
                            "image_url": "https://imagevault.delectame.com/md5/7563a0254b41ebb3f4a5ce257fe5c383",
                            "date": "2022-12-07",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941b0",
                            "image_url": "https://imagevault.delectame.com/md5/a51b54cad62f0c02328f093fd045d3ee",
                            "date": "2022-09-06",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941b1",
                            "image_url": "https://imagevault.delectame.com/md5/683e851e62ca09dd520fa9351940bdca",
                            "date": "2022-09-03",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941b2",
                            "image_url": "https://imagevault.delectame.com/md5/b839ba5476af0e5725a51d025df5618c",
                            "date": "2022-09-01",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941b3",
                            "image_url": "https://imagevault.delectame.com/md5/f5104ebfaa88b6548ee45546c6eb3493",
                            "date": "2022-08-15",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941b4",
                            "image_url": "https://imagevault.delectame.com/md5/c23ed74534e27469b7bba11b31ff38d4",
                            "date": "2022-08-15",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941b5",
                            "image_url": "https://imagevault.delectame.com/md5/ff146862e6fbb0acf82c71de983c2e5f",
                            "date": "2022-11-18",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941b6",
                            "image_url": "https://imagevault.delectame.com/md5/2bf0ec1568b654a678b9a5c48ab4ed53",
                            "date": "2022-08-15",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941b7",
                            "image_url": "https://imagevault.delectame.com/md5/a6d999df9b1a8894c211091a2cc4b47d",
                            "date": "2022-08-15",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941b8",
                            "image_url": "https://imagevault.delectame.com/md5/1b3eedefe194421a759530af0968324f",
                            "date": "2022-08-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941b9",
                            "image_url": "https://imagevault.delectame.com/md5/fcf985dbe02a40e25f717e4c603da5df",
                            "date": "2022-08-07",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ba",
                            "image_url": "https://imagevault.delectame.com/md5/e2d791c8aa16267ab948cd19683558cb",
                            "date": "2022-08-02",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941bb",
                            "image_url": "https://imagevault.delectame.com/md5/59dffd15d86780f0f930900c32bfc31d",
                            "date": "2022-11-17",
                            "label": "tv"
                        }
                    ],
                    "soccer_images_count": 17,
                    "_id": "68646fe29b544de5c5c941bc"
                },
                "comments": {
                    "total_comments": 35,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c941bd",
                            "comment_text": "Great place to watch football, drink and food",
                            "date": "2022-08-07",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941be",
                            "comment_text": "The entertainment was fun. I only watched the football so didn't experience the food which looked nice enough.",
                            "date": "2022-08-29",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941bf",
                            "comment_text": "A brilliant bar /restaurant staff are friendly and welcoming and not one bit pushy. Went out of their way to get us league of Ireland soccer games. 10 /10 tequila bar we will be back. Best of continued success to you from 3 Happy Irish customers. September 2022 x",
                            "date": "2022-09-21",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941c0",
                            "comment_text": "We thought we would try here for something to eat after it seemed to be busy few times we had gone by. We ended up eating here about 7-8 times on our holiday and went in a couple of times just for drinks too when watching football. Everything we had to eat was very tasty, fresh and very reasonably priced. It became our favourite place to go. We even took some family members there when we met up with them and they loved it too. Every single one of the staff were absolutely lovely and couldn’t do enough for you, they were brilliant with my 2year old daughter too. We tried everything from steak, pizzas, tequila chicken, lasagne, club sandwich, gammon to the kids meals and couldn’t fault anything. They even boxed up pizza for us to takeaway after we could t eat it all. They are big portions too. Try this place you won’t be disappointed! We will definitely be returning next time we come to Puerto Del Carmen.",
                            "date": "2022-09-02",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941c1",
                            "comment_text": "Football beer and food what more do you need. Oh the burger was immense ????",
                            "date": "2022-09-14",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941c2",
                            "comment_text": "Brilliant place any time of the day. Always make it my local when in PDC Staff are attentive Good selection of drinks at good prices Great for watching the sports Good entertainment with live bands and toooooonz later on Thumbs up in all areas. . . . Be there 15.12.22 . . . !!!!",
                            "date": "2022-09-09",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941c3",
                            "comment_text": "Great food . Great drinks. Plently of screens to watch sports. Will search for whatever game your wanting to see. Top guys.",
                            "date": "2022-10-15",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941c4",
                            "comment_text": "Good for football",
                            "date": "2022-11-03",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941c5",
                            "comment_text": "Top bar ,ask for football and it's on, great service,very reasonable prices.",
                            "date": "2022-12-04",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941c6",
                            "comment_text": "Great food and great for watching football",
                            "date": "2023-01-07",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941c7",
                            "comment_text": "We popped in here to watch football, very friendly staff, multiple  tvs with different sports on, beer was reasonably priced, and lot's of choice on tap. Food looked tasty. We didn't try due to wanting to try a different place. We will definitely visit again.",
                            "date": "2023-04-16",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941c8",
                            "comment_text": "Great bar right in front of the beach that has a large menu of drinks & is very popular for live sports, especially football...has a pub grub menu too....& a resident live band pumping out tunes",
                            "date": "2023-04-27",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941c9",
                            "comment_text": "Great atmosphere perfect fof watching all sports events 12 tvs all on any chanel required food excellent atmosphere in the evening fantastic live band called questtion on every night play music to suit all tastes staff and service very efficient and friendly only comment is the toilets need upgrading ASAP",
                            "date": "2023-04-27",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ca",
                            "comment_text": "Really friendly staff, they have all the sport on you can think of. They even ask you what you want to watch and try and accommodate you ????????",
                            "date": "2023-05-08",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941cb",
                            "comment_text": "Lovely place to  watch the world go by and football",
                            "date": "2023-05-23",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941cc",
                            "comment_text": "Excellent place awesome food! great for watching sports,live music ..  but mostly staff are fantastic making you feel at home and relaxed for the perfect holiday highly recommend ",
                            "date": "2023-05-29",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941cd",
                            "comment_text": "Went to see a football match on TV. It shows League of Ireland matches as well as GAA",
                            "date": "2023-06-01",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ce",
                            "comment_text": "Nice bar, good location, had the football on and decent beer",
                            "date": "2023-09-01",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941cf",
                            "comment_text": "Great place to have food, a drink, or just watch sport on one of the numerous TV. Staff are great. Very friendly. And their food is excellent!Only thing, a rock band starts playing @10 pm every night and are very loud. And play the same songs every night. Not sure if they are a permanent fixture but they really weren't our cup of tea, but might be others. Otherwise I would definitely recommend.",
                            "date": "2023-09-26",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941d0",
                            "comment_text": "Free drinks and watched the football lots of flat screen TVs",
                            "date": "2023-09-13",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941d1",
                            "comment_text": "Used this place many times during our stay in Lanzarote - very friendly staff and reasonable priced drinks. Lots of screens to watch sports throughout the place",
                            "date": "2023-09-25",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941d2",
                            "comment_text": "Used Tequila lounge a few times during our holiday and would recommend it for cocktails, beers etc. didn’t eat much there but one of our group had a club sandwich and said it was great. Lots of servers there so you’re never waiting too long for a drink and they were all very friendly too. We were going mainly to watch sport and there are screens everywhere. If you can’t see the sport you’re looking for on any of the screens, just ask someone as they are very accommodating. Will definitely visit again next time we’re in Lanzarote.",
                            "date": "2023-09-25",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941d3",
                            "comment_text": "Great sports bar for watching your favorite team, very accommodating, very friendly.",
                            "date": "2023-10-01",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941d4",
                            "comment_text": "Every time we visit lanzarote this place is our go to. Food is great service is excellent. Not only do they show pretty much every football game but they also have the best band on the island play there “QUESTION” Give this place a try !!!",
                            "date": "2023-10-17",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941d5",
                            "comment_text": "Loads of football on the TVs, so it was popular.",
                            "date": "2023-10-31",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941d6",
                            "comment_text": "We came here to watch F1. Service is really bad. We had to wait really long to get drinks and even longer to get food. The food was awful and too expensive for the amount and quality you get. We also sat in front of the TV and I asked if F1 was going to play on it, since football was on it. The waitress said yes, but it didn't. She turned it on at other tv's so we had to switch places and got bad seats the watch the race. I don't recommend this place.",
                            "date": "2023-10-13",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941d7",
                            "comment_text": "Great set of waiters friendly and helpful especially roul . If your watching the footy or watching the live entertainment great atmosphere ???? ????",
                            "date": "2023-12-26",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941d8",
                            "comment_text": "Good location to watch the many sports on show. The service can be temperamental dependent on who is working. Always a good enough atmosphere and the food is good for what you pay. Could possibly do with a refurb. The toilets arrangements do not compliment the capacity of the bar. Also the entertainment could be injected with some new talent. Will visit next time in the hope there are changes if not then there are alternatives.",
                            "date": "2024-01-05",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941d9",
                            "comment_text": "Had drinks here whilst watching the rugby.\nVery busy but a nice lady found us a seat and got a waiter to get the drinks. \nNext time we wanted a drink I smiled at a waiter and raised my hand to order. He looked  straight at me , turned left and busy himself or avoided  me. This was noted by other staff who were doing their job. This waiter continued to do anything but serve, apparently he was in a mood. Maybe he needs a change of jobs.\n",
                            "date": "2024-02-24",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941da",
                            "comment_text": "Normally pop in here watch some football, drinks etc. Place has many Screens with different games playing… This time tried some food and was not disappointed, calamari and chips was actually really nice as was the toasted Sandwich (few more chips please!) overall very Satisfied 🙂.\n\nPlease tick the box below ⬇️ if helpful… Thanks",
                            "date": "2024-02-14",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941db",
                            "comment_text": "Didn't try food but looked good. Very accommodating for anyone wanting to watch football etc. People coming in asking for certain games and they would do their upmost to get it on for them. With the multiple tvs available. Band was also very good rock band.",
                            "date": "2024-03-23",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941dc",
                            "comment_text": "Love this venue great drinks friendly staff great service .\nWatched football great atmosphere \nFollowed by Question the band playing great music very friendly and fun different sets each night",
                            "date": "2024-04-08",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941dd",
                            "comment_text": "Watched football there whilst on vacation.",
                            "date": "2024-05-27",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941de",
                            "comment_text": "We came to watch the rugby. We were ignored for a long time before eventually getting attention and ordering a drink. We wanted to get into the shade so moved tables but still quite close. The waiter was very rude and offensive and said we should not have moved!  We sat for another 30 minutes being ignored and then left. Horrible horrible waiter we would never return!",
                            "date": "2024-05-02",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941df",
                            "comment_text": "I was looking for a sports bar to watch the women Champions league final. Few days before the match I approached the manager to ask if they would show it. After boasting about how many screens they had, he said that no problem and he would show it. On the day I turned up with my family and asked the waiter to confirm. He went to speak to the same manager and then I could hear a loud long Naaaaaaah from behind the bar. Consequently, big Naaaaaaah review from me for two reasons. First you cannot trust what they say. If you want to watch a sports event simply don't come here, even if they confirm it before hand, they might or might not show it, depends how they feel on the day.  Second, they showed utter disrespect for women football. This was the biggest women football match of the season, so if they are so against showing it, forget about any other women football match.",
                            "date": "2024-05-26",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 26,
                    "_id": "68646fe29b544de5c5c941e0"
                },
                "tags": [
                    "bar deportivo",
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c941e1"
            },
            "cityUid": "8fe0f974b278df723d99fd30f1292bebab7b2132",
            "provinceUid": "6b8d748d12ec4a87668b480f264f1e00ef64db28",
            "regionUid": "9bbc6efb8fffb5e28763fd08b248bbd23034e358",
            "postalCodeUid": "38c33a87fc621e073cb3fca6dc67ff91def3561f",
            "provinceNameNormalized": "laspalmas",
            "nameNormalized": "tequilalounge",
            "links": {
                "tripAdvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g662290-d2637392-Reviews-Tequila_Lounge-Puerto_Del_Carmen_Tias_Lanzarote_Canary_Islands.html",
                "googleUrl": "https://maps.google.es/?cid=12703967205613469117",
                "elTenedorUrl": null,
                "facebookUrl": null,
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf55",
            "restaurantUidentifier": "62afa429a0e153abb5b2b72d4e3f741815c5960d",
            "name": "Aloha Sa Coma",
            "streetAddress": "Avenida de les savines",
            "numberAddress": "13",
            "provinceName": "Baleares",
            "regionName": "Illes Balears",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99851,
            "evidences": {
                "images": {
                    "total_images": 21,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c941e2",
                            "image_url": "https://imagevault.delectame.com/md5/f4dd2346871028e00b036568af2085f3",
                            "date": "2023-08-22",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941e3",
                            "image_url": "https://imagevault.delectame.com/md5/0a97b6c433684da6511871c5b58620e6",
                            "date": "2023-09-14",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941e4",
                            "image_url": "https://imagevault.delectame.com/md5/993cfb69dc9222a343b503d5c1764d8d",
                            "date": "2023-09-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941e5",
                            "image_url": "https://imagevault.delectame.com/md5/c2f1b30b88f397703436e04ae13698b5",
                            "date": "2023-07-17",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941e6",
                            "image_url": "https://imagevault.delectame.com/md5/bd959f41d5b1b3ffe61becf5842956d9",
                            "date": "2023-04-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941e7",
                            "image_url": "https://imagevault.delectame.com/md5/a6d5c270eb1b1c5fda9bcbb2c87e884d",
                            "date": "2024-06-27",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941e8",
                            "image_url": "https://imagevault.delectame.com/md5/0d1105a1c86cdf1ade820426597d4ca0",
                            "date": "2024-06-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941e9",
                            "image_url": "https://imagevault.delectame.com/md5/76acc433890723e6b1f11f2f5ec31c2e",
                            "date": "2024-06-27",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ea",
                            "image_url": "https://imagevault.delectame.com/md5/06a6589361484c392d202e885442f8f7",
                            "date": "2024-06-27",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941eb",
                            "image_url": "https://imagevault.delectame.com/md5/81e81fb494b67b85176874c193c783b0",
                            "date": "2024-06-27",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ec",
                            "image_url": "https://imagevault.delectame.com/md5/54f46d76709ab2e93ab49e3c446a69fa",
                            "date": "2024-06-27",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ed",
                            "image_url": "https://imagevault.delectame.com/md5/f5b0d34b60f8aa020c63b10971876074",
                            "date": "2024-06-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ee",
                            "image_url": "https://imagevault.delectame.com/md5/e7c7561b38f0d3a2e2f870419fd4203e",
                            "date": "2024-06-27",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ef",
                            "image_url": "https://imagevault.delectame.com/md5/54c18b0c7d6f676e11535561397d491d",
                            "date": "2024-06-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941f0",
                            "image_url": "https://imagevault.delectame.com/md5/c64bbf45960506915c589f4447113a12",
                            "date": "2024-06-27",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941f1",
                            "image_url": "https://imagevault.delectame.com/md5/69109c738a06360b476ef1870e6525c1",
                            "date": "2024-06-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941f2",
                            "image_url": "https://imagevault.delectame.com/md5/aef83c1f2366046f26eeebdd473ee12f",
                            "date": "2024-06-25",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941f3",
                            "image_url": "https://imagevault.delectame.com/md5/6d04184bf5056b47e640d2e28f340001",
                            "date": "2022-09-01",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941f4",
                            "image_url": "https://imagevault.delectame.com/md5/0fe60a6228a4bbc722195c348512a480",
                            "date": "2022-09-01",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941f5",
                            "image_url": "https://imagevault.delectame.com/md5/742dead82a7c3d927d324aeb2c8acd8d",
                            "date": "2022-08-03",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941f6",
                            "image_url": "https://imagevault.delectame.com/md5/5576df28e1483db6124e32a56b5c7fbb",
                            "date": "2022-08-04",
                            "label": "tv with soccer"
                        }
                    ],
                    "soccer_images_count": 14,
                    "_id": "68646fe29b544de5c5c941f7"
                },
                "comments": {
                    "total_comments": 1,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c941f8",
                            "comment_text": "Mejor sitio sin duda para tomar un buen cóctel y ver el fútbol de todo sa coma",
                            "date": "2023-04-07",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 1,
                    "_id": "68646fe29b544de5c5c941f9"
                },
                "tags": [
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c941fa"
            },
            "cityUid": "6ac58bec945e0a51258bd3c2c22d631c226fef55",
            "provinceUid": "907abf6fbe1a14ac29e9f3fb5408c79c968fb0b9",
            "regionUid": "d74559416c110c2eaea774c77d888c1b22ade8fe",
            "postalCodeUid": "223732fe973bba78edbfb1528e2e999385c0d14e",
            "provinceNameNormalized": "baleares",
            "nameNormalized": "alohasacoma",
            "links": {
                "tripAdvisorUrl": null,
                "googleUrl": "https://maps.google.es/?cid=2922694688472265876",
                "elTenedorUrl": null,
                "facebookUrl": "https://www.facebook.com/alohacoffeecocktails",
                "twitterUrl": null,
                "instagramUrl": "https://www.instagram.com/aloha_sa_coma",
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf56",
            "restaurantUidentifier": "e2ea2e422dd88d7eb176400a4c61c9b956b463a8",
            "name": "RESTAURANTE - CAFETERÍA LA SEDE",
            "streetAddress": "Avenida de juan pablo ii",
            "numberAddress": null,
            "provinceName": "Madrid",
            "regionName": "Comunidad de Madrid",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99797,
            "evidences": {
                "images": {
                    "total_images": 63,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c941fb",
                            "image_url": "https://imagevault.delectame.com/md5/f22446c8000b42066f2e7cd65c2af0fc",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941fc",
                            "image_url": "https://imagevault.delectame.com/md5/a989749558c5f6967156de63422fe458",
                            "date": "2024-03-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941fd",
                            "image_url": "https://imagevault.delectame.com/md5/bc2a905e3e4436d3fd65acfb0e17ab33",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941fe",
                            "image_url": "https://imagevault.delectame.com/md5/ecf253250255eb1249ac3dc2f669330a",
                            "date": "2024-05-06",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c941ff",
                            "image_url": "https://imagevault.delectame.com/md5/5070b666bedcb53ec1ab6b03cdefc990",
                            "date": "2024-03-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94200",
                            "image_url": "https://imagevault.delectame.com/md5/f6ee5f5c90eca480ea62efa105b53898",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94201",
                            "image_url": "https://imagevault.delectame.com/md5/f8bd37c52eebea9a0c48880fccb97fb6",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94202",
                            "image_url": "https://imagevault.delectame.com/md5/ad264fd939960529d6be564c14681f96",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94203",
                            "image_url": "https://imagevault.delectame.com/md5/9b943264701d9cfaa7dc19fa492af21a",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94204",
                            "image_url": "https://imagevault.delectame.com/md5/6901fb0d99a309a8295c3363f7713e29",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94205",
                            "image_url": "https://imagevault.delectame.com/md5/c46e063e049994ddff63f4169d01be6a",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94206",
                            "image_url": "https://imagevault.delectame.com/md5/749b71959ce0813a9ac67d8ba5dc7fbc",
                            "date": "2024-03-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94207",
                            "image_url": "https://imagevault.delectame.com/md5/360d8b829c98db553e65ee999ecac60c",
                            "date": "2024-04-13",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94208",
                            "image_url": "https://imagevault.delectame.com/md5/a020983da4b38fc6fe274329bd79a056",
                            "date": "2024-04-13",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94209",
                            "image_url": "https://imagevault.delectame.com/md5/8f34af9f73b7521e679be9528e878e1a",
                            "date": "2023-04-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9420a",
                            "image_url": "https://imagevault.delectame.com/md5/c62ba649a3b46057d1ab293aa7166da2",
                            "date": "2023-07-13",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9420b",
                            "image_url": "https://imagevault.delectame.com/md5/dd43e35c10cb1b210e4e7ac6d70a1912",
                            "date": "2024-03-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9420c",
                            "image_url": "https://imagevault.delectame.com/md5/c4e0814df44668c7f4adb58d074d1679",
                            "date": "2024-03-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9420d",
                            "image_url": "https://imagevault.delectame.com/md5/5e9bf8567879026bc3e47a0d0d601530",
                            "date": "2024-03-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9420e",
                            "image_url": "https://imagevault.delectame.com/md5/31c5c0d7204523d900e4cb3a173ac6db",
                            "date": "2024-03-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9420f",
                            "image_url": "https://imagevault.delectame.com/md5/d7c5bc7a7da509c61dd3b05bcdd3ceb5",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94210",
                            "image_url": "https://imagevault.delectame.com/md5/5d5da7df558be65baa36b631f5c28e6d",
                            "date": "2024-03-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94211",
                            "image_url": "https://imagevault.delectame.com/md5/81255e2c6f6841ae9e13b4c31e1fbe55",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94212",
                            "image_url": "https://imagevault.delectame.com/md5/a5e35b754c1b5d75be13ff6d1f768a64",
                            "date": "2023-03-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94213",
                            "image_url": "https://imagevault.delectame.com/md5/5da89f209ab1ce4ecd327f53def3b4e8",
                            "date": "2023-03-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94214",
                            "image_url": "https://imagevault.delectame.com/md5/1b4ce3c79dc8b7fb13bc08822a4ed7b1",
                            "date": "2023-03-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94215",
                            "image_url": "https://imagevault.delectame.com/md5/09e2103b894e7bb9c209bbbfd87a865e",
                            "date": "2023-01-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94216",
                            "image_url": "https://imagevault.delectame.com/md5/e34a5bcefb960d751e1023726146e736",
                            "date": "2023-03-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94217",
                            "image_url": "https://imagevault.delectame.com/md5/a937105fb7289e2583c0fb5e497cd6aa",
                            "date": "2023-01-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94218",
                            "image_url": "https://imagevault.delectame.com/md5/e9d237de80d6135454474748deb4d5bf",
                            "date": "2023-01-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94219",
                            "image_url": "https://imagevault.delectame.com/md5/9b497793cf44a6b877ca263b20691214",
                            "date": "2023-01-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9421a",
                            "image_url": "https://imagevault.delectame.com/md5/110d7d233e847fa5c2b6a2ddfae3a162",
                            "date": "2023-01-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9421b",
                            "image_url": "https://imagevault.delectame.com/md5/ef60482a08d2425eb2408ef2f2a93d57",
                            "date": "2023-12-30",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9421c",
                            "image_url": "https://imagevault.delectame.com/md5/79d2a48631afe3c200f00b0d2cde2e78",
                            "date": "2023-01-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9421d",
                            "image_url": "https://imagevault.delectame.com/md5/041d323e3a7c29d700c46a7bace0f53e",
                            "date": "2023-05-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9421e",
                            "image_url": "https://imagevault.delectame.com/md5/bac1f4781564fa6161ac221090299d46",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9421f",
                            "image_url": "https://imagevault.delectame.com/md5/54d97bf93d72d7aa95910e11965001e9",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94220",
                            "image_url": "https://imagevault.delectame.com/md5/bdea6c5911dc634139d067eb4eacbefe",
                            "date": "2024-05-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94221",
                            "image_url": "https://imagevault.delectame.com/md5/1b56fc8e19432a2356f4623396adbdad",
                            "date": "2023-03-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94222",
                            "image_url": "https://imagevault.delectame.com/md5/06340e2b12358cb0f087b8f2414aaacf",
                            "date": "2023-03-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94223",
                            "image_url": "https://imagevault.delectame.com/md5/bfd958b73568671a14396d0a323e47f6",
                            "date": "2023-12-30",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94224",
                            "image_url": "https://imagevault.delectame.com/md5/cd0cef43c2da1b0648e8a1f4ef8ee997",
                            "date": "2023-01-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94225",
                            "image_url": "https://imagevault.delectame.com/md5/e2b6af60741ee995518ec5d2b9cadb43",
                            "date": "2023-05-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94226",
                            "image_url": "https://imagevault.delectame.com/md5/b94f9ac0cd96a0f63ce7de36d4b60136",
                            "date": "2023-01-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94227",
                            "image_url": "https://imagevault.delectame.com/md5/e55ac1bb858d72965a206572ab7f86c8",
                            "date": "2023-05-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94228",
                            "image_url": "https://imagevault.delectame.com/md5/78fc534fe3feb8571b4592066feb0e5c",
                            "date": "2023-05-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94229",
                            "image_url": "https://imagevault.delectame.com/md5/4b1644c03655bc1c6952e84f2efaf22a",
                            "date": "2023-05-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9422a",
                            "image_url": "https://imagevault.delectame.com/md5/6b77ca5d20ce1b8d553fcfadf6345fed",
                            "date": "2023-05-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9422b",
                            "image_url": "https://imagevault.delectame.com/md5/41197dbf948e3fbe86e4caae51c0bea8",
                            "date": "2023-05-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9422c",
                            "image_url": "https://imagevault.delectame.com/md5/e5aea9de1d3c3a10c7609a34aa443aaf",
                            "date": "2023-01-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9422d",
                            "image_url": "https://imagevault.delectame.com/md5/0d50c8637afa03cc060672007ab8d7e1",
                            "date": "2023-05-14",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9422e",
                            "image_url": "https://imagevault.delectame.com/md5/d07f8783ef8ef1939942344dd298607f",
                            "date": "2023-01-10",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9422f",
                            "image_url": "https://imagevault.delectame.com/md5/59f83dc1ec76376e51e6beb1aab5fa4c",
                            "date": "2023-05-14",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94230",
                            "image_url": "https://imagevault.delectame.com/md5/211a8d99c8d30c89ea651ea013e57d26",
                            "date": "2023-01-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94231",
                            "image_url": "https://imagevault.delectame.com/md5/8001c73e3cb5f96e1c4dbee77db486a7",
                            "date": "2023-12-30",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94232",
                            "image_url": "https://imagevault.delectame.com/md5/124d1d4ef0085010e00a282bf6fb2ba4",
                            "date": "2023-01-10",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94233",
                            "image_url": "https://imagevault.delectame.com/md5/3a62cfd30b3acade8ac5a9ee94fe662c",
                            "date": "2023-04-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94234",
                            "image_url": "https://imagevault.delectame.com/md5/c7c6bada776ef8f9037495b5cfd71f61",
                            "date": "2023-12-30",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94235",
                            "image_url": "https://imagevault.delectame.com/md5/81edc966cea3308808cb1d0782f038bf",
                            "date": "2023-12-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94236",
                            "image_url": "https://imagevault.delectame.com/md5/eedb8726652180b9db7ec9ab75325528",
                            "date": "2023-12-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94237",
                            "image_url": "https://imagevault.delectame.com/md5/282848b1a53984729428a3d3d94547b4",
                            "date": "2023-12-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94238",
                            "image_url": "https://imagevault.delectame.com/md5/2aee636ed1e0722a63ffb432effa2f52",
                            "date": "2023-12-27",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94239",
                            "image_url": "https://imagevault.delectame.com/md5/cff2aa79a6e272fd0ec591a093587648",
                            "date": "2023-10-18",
                            "label": "tv"
                        }
                    ],
                    "soccer_images_count": 3,
                    "_id": "68646fe29b544de5c5c9423a"
                },
                "comments": {
                    "total_comments": 4,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c9423b",
                            "comment_text": "Un lugar muy bueno para tomar algo, comer o ver deportes. También es bar de copas y hacen algunos conciertos",
                            "date": "2022-12-31",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9423c",
                            "comment_text": "Buen precio, buenos aparecidos. Un buen sitio para disfrutar con los amigos o ver fútbol.",
                            "date": "2023-05-15",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9423d",
                            "comment_text": "Buenas tapas, buena música y buen lugar para distraerse y ver fútbol 😊",
                            "date": "2023-05-13",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9423e",
                            "comment_text": "El mejor pub/discoteca de Colmenar Viejo. Se cena bien. Con una carta amplia de cervezas. El sitio está muy bien decorado. Muy buena música y gran ambiente, sobre todo los fines de semana. Organizan conciertos, se ven partidos de fútbol y organizan torneos de mus. El dueño Maxi muy majo, así como todas las camareras Dayana y Natalia. Un placer ir y se lo recomiendo a todos. Sí se llena siempre es por algo.",
                            "date": "2023-06-10",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 3,
                    "_id": "68646fe29b544de5c5c9423f"
                },
                "tags": [],
                "_id": "68646fe29b544de5c5c94240"
            },
            "cityUid": "dae3aa040991a31339ccf0d1fd0255a0a78f244a",
            "provinceUid": "50ded3c0d0c9a7e38cd70cf4ce4056dfdfc0ed12",
            "regionUid": "0ed1442ec91e8bb28389153a7ea84f9fd6342bf9",
            "postalCodeUid": "c6867a814eede2142b6cec2905983f692a34787f",
            "provinceNameNormalized": "madrid",
            "nameNormalized": "restaurante-cafeterialasede",
            "links": {
                "tripAdvisorUrl": null,
                "googleUrl": null,
                "elTenedorUrl": null,
                "facebookUrl": null,
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf57",
            "restaurantUidentifier": "a92bf3d6274d0a3219b5de80209a8cb5d07193f1",
            "name": "The Harrow Maspalomas sport bar - Holiday World",
            "streetAddress": "holiday world",
            "numberAddress": null,
            "provinceName": "Las Palmas",
            "regionName": "Canarias",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99767,
            "evidences": {
                "images": {
                    "total_images": 17,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c94241",
                            "image_url": "https://imagevault.delectame.com/md5/05a84fc0b1933205e235af579c5d3c06",
                            "date": "2023-09-03",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94242",
                            "image_url": "https://imagevault.delectame.com/md5/0567418e2b87950bcb41c2ef19423dd5",
                            "date": "2023-09-03",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94243",
                            "image_url": "https://imagevault.delectame.com/md5/9ac8eab5963e3492ea42e27a6b476e29",
                            "date": "2023-08-13",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94244",
                            "image_url": "https://imagevault.delectame.com/md5/c5d82ac58216e77fa8ed0953f02882c0",
                            "date": "2023-03-27",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94245",
                            "image_url": "https://imagevault.delectame.com/md5/a0f00e2bbf61fc4118154b68d8fe975f",
                            "date": "2023-02-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94246",
                            "image_url": "https://imagevault.delectame.com/md5/1f028c353527f39f77124e0085d51a6b",
                            "date": "2023-02-04",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94247",
                            "image_url": "https://imagevault.delectame.com/md5/ebad90945322e6c409c44067c41d9c00",
                            "date": "2024-04-28",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94248",
                            "image_url": "https://imagevault.delectame.com/md5/e7da7effadcbe4859c868e7461237abd",
                            "date": "2024-04-28",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94249",
                            "image_url": "https://imagevault.delectame.com/md5/ad2f08e7afb6715232c0e7d9ed01f2bb",
                            "date": "2024-04-28",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9424a",
                            "image_url": "https://imagevault.delectame.com/md5/2e87be1ac4fbf9f09df26a64fa661200",
                            "date": "2024-04-06",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9424b",
                            "image_url": "https://imagevault.delectame.com/md5/161499eee258539e75b2bd34f2c2a938",
                            "date": "2024-04-06",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9424c",
                            "image_url": "https://imagevault.delectame.com/md5/62b23cf9d8bd08bbb287788980ec41f2",
                            "date": "2024-03-24",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9424d",
                            "image_url": "https://imagevault.delectame.com/md5/a546c727450a7f47a29201e9dbc04f4d",
                            "date": "2024-03-04",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9424e",
                            "image_url": "https://imagevault.delectame.com/md5/b608c3331484caa03379a07fc907f5a1",
                            "date": "2024-02-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9424f",
                            "image_url": "https://imagevault.delectame.com/md5/e2f014d4854284fd5aea9d17a5f5b0bc",
                            "date": "2024-01-24",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94250",
                            "image_url": "https://imagevault.delectame.com/md5/3d78e21ccd7bb740f967e9626aca1798",
                            "date": "2023-12-05",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94251",
                            "image_url": "https://imagevault.delectame.com/md5/1e524831d0dcd0374817ff425b8d754b",
                            "date": "2022-12-11",
                            "label": "tv with soccer"
                        }
                    ],
                    "soccer_images_count": 14,
                    "_id": "68646fe29b544de5c5c94252"
                },
                "comments": {
                    "total_comments": 22,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c94253",
                            "comment_text": "Ir con mi hijo un día que había partido de fútbol. Consumimos 12 euros, cual fue la sorpresa, que a la hora de pagar, nos cobran 20 euros. Supuestamente cobran 10 euros por persona en silla, el día de partido... dudo mucho que sea legal hacer eso... un abuso",
                            "date": "2022-08-13",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94254",
                            "comment_text": "The Harrow es un local ubicado en una de las zonas más turísticas de la isla con un ambiente genial para pasarlo bien viendo un partido o simplemente tomar una copa. Los juegos están impecables y la oferta para ver cualquier tipo de deporte es indiscutible, cuando no hay deportes llevan música en vivo. Los precios adecuados por la zona en la que están y el tipo de local que es. Los camareros del sitio muy atentos (tanto con personas como con perros), distendidos y hacen unos cócteles, sobretodo el mojito, de escándalo.  He acudido en muchas ocasiones con mi perrita a este sitio y seguiré yendo, es un sitio fácil de estar y ubicado perfecto.",
                            "date": "2022-08-04",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94255",
                            "comment_text": "Donde puedes ver el deporte en una pantalla gigante? Pues, aquí.Ademas de jugar al billar, dardos... Muy divertido",
                            "date": "2022-08-31",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94256",
                            "comment_text": "Fuimos 4 amigos a ver un partido de futbol y horrible estaba medio vacio y lo demas  todo reservado sofas como mesas nos pusieron en una esquina y lo mas gracioso es q la reserva eran parejas en sofas de 6 pax  q llegaron a medio partido ..y nosotros 4 en una messita de una pareja ..el camarero del interior nefasto se olvidaba de las bebidas ,despues la cuenta... antipatico  no se si adredez por q ni le importaba. Una pena xq es un Gran local pero el servicio nefasto. NADA RECOMENDABLE",
                            "date": "2022-08-24",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94257",
                            "comment_text": "Muy insatisfecha con el trato del dueño del local. En el partido solo habían ingleses y nosotros al ser españoles nos echan, por aforo lleno y al salir entraron a otros inglés en el mismo sitio que nosotros el propio dueño, como se llama eso???",
                            "date": "2022-12-10",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94258",
                            "comment_text": "Pésimo trato de parte del dueño, el bar lleno de ingleses por el partido y con sillas libres. Entramos y nos echaron sin explicación, llamaron hasta el guardia por pedir explicaciones. Entraron otros ingleses a nuestro sitio y como si nada. Yo español no vuelvo más xenofogos",
                            "date": "2022-12-10",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94259",
                            "comment_text": "Hoy martes 13 De diciembre acudo con mi familia a ver el partido Argentina crocia con my niño De 8 año y su Amiga De 10 esperamos a la puerta para q el camarero nos De Una Mesa y la mayoria estaba reservada sin el cartel Al final nos deja Una Mesa   y nos obliga a pagar 10€por persona Digo Bueno comemos algo bebemos Seguro llegara a 40€ dava igual el precio q no se si es legal o no a obligarte . Al final nos sentamos I faltaba 30 min para empesar el partido y decisions q vamos a jugar Al ping pong tall y Como dice el anuncio en holiday world  le desimos Al camarero y dice q se alquila en la bara luego vuelve a nosotros y dice q tiene q ablar con el manager el manager decide que esta cerada la. Area De los juegos no se si es legal o noAl final nos fuimos. muy decilusionado por astropearme la noche pedimos la oja De reclamation no los dejo luego e pensado q lo esta pasando muy mal por pedir a la gente un minimo De consumicion y me Dio pena.",
                            "date": "2022-12-13",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9425a",
                            "comment_text": "El local está muy bien para ver los partidos de fútbol y eventos deportivos. La mayoría de los mesoneros simpaticos… en especial uno británico alto… pero hay una mesonera bajita de pelo negro que es INSOPORTABLE!  Vacilona, arrogante, humillante y déspota… cada vez que me da por entrar en el bar y la veo salgo corriendo. También son un poco pesados obligándote a consumir pero eso lo puedo entender, aunque a veces lo dicen de forma grosera. De resto el bar perfecto.",
                            "date": "2022-12-31",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9425b",
                            "comment_text": "Excellent sports pub. Was nice to watch the game outside and have a few beers.   Service was five stars ????",
                            "date": "2022-12-10",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9425c",
                            "comment_text": "Lugar inmejorable en el sur de la isla para pasar un buen rato con amigos mientras ves un partido de fútbol o algún otro deporte, gracias a las innumerables pantallas de TV mientras te tomas algo. Es muy cómodo, el servicio rápido y precios medios. Lugares así faltan en la capital gc",
                            "date": "2022-12-23",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9425d",
                            "comment_text": "No tienen comida. Para ver eventos deportivos, el.mejor de la isla!",
                            "date": "2022-12-17",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9425e",
                            "comment_text": "What a brilliant venue.. also best draft pint I’ve had on the island.. ok it’s out of season but needs more paying punters to appreciate what the guys are providing.. watch the Newcastle v Leeds game and popping down for Tuesday game against Arsenal.. hwtl",
                            "date": "2023-01-02",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9425f",
                            "comment_text": "muy buen ambiente deportivo",
                            "date": "2023-02-12",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94260",
                            "comment_text": "Me gusta el sitio para ver futbol o formula 1, el precio razonable y el ambiente es increíble. Lo único que la comida hay que pedirlo en otro sitio, y es incómodo salir para tener que cogerlo.",
                            "date": "2023-04-23",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94261",
                            "comment_text": "Me pusieron una pantalla con el partido del Athletic Club siendo yo el único interesado en verlo. Muchas gracias",
                            "date": "2023-05-28",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94262",
                            "comment_text": "Un sitio que para ver los partidos está muy bien. Para el Ping pong y el billar tienes que consumir y ahí es que te dan las fichas y todo eso.",
                            "date": "2023-05-09",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94263",
                            "comment_text": "Came here on a sunday afternoon to watch a liverpool match (we are from liverpool) and was glad we did. Big main screen plus atleast 10 other smaller screens around. Nice cool modern bar which is reasonably priced. Staff were 10/10 really they are so nice and friendly and never leave you with an empty glass. You can grab takeaway food from mr kale next door and eat inside the sports bar they encourage it, smash burger was amazing! We didnt do games but plenty available pool, darts etc. We went to holiday world park straight after which was also great. Family of four with two kids 7 and 3 great day and night out!!",
                            "date": "2023-08-13",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94264",
                            "comment_text": "Great place to watch sport and have a beer",
                            "date": "2023-08-30",
                            "label": "sports_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94265",
                            "comment_text": "Precios acorde al resto de servicios, muy limpio, buena atención de camareros, sólo diría que incluso con los partidos sería bueno saber los precios antes de pedir. Qr en las mesas por ejemplo.  La cerveza es más rentable que los refrescos... ;) Ahhh y ponen a nuestra Unión Deportiva Las Palmas en Pantalla de cine",
                            "date": "2023-09-09",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94266",
                            "comment_text": "Went here whilst on holiday with the kids to watch a match (of course). The staff were brilliant, set the tv up for the match the boys wanted to watch and made sure it was in our language.  Great service all round.  Will be revisiting next time we’re here ????",
                            "date": "2024-03-03",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94267",
                            "comment_text": "Visitamos este sitio para ver un partido de fútbol y la chica rubia de la barra una mal educada, atención 0 por no hablar del chico moreno con tatuajes al que le pedimos varias cosas y nos mandó a la barra. Los cubatas, un -10 sin hielo te dan la lata para que te la eches tú… Un cuadro. Una pena porque el local tiene mucho potencial.",
                            "date": "2024-04-06",
                            "label": "soccer_comment"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94268",
                            "comment_text": "Genial para ver partidos",
                            "date": "2024-04-09",
                            "label": "sports_comment"
                        }
                    ],
                    "soccer_comments_count": 17,
                    "_id": "68646fe29b544de5c5c94269"
                },
                "tags": [
                    "bar deportivo",
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c9426a"
            },
            "cityUid": "a3502f9aee3fab04c710cb8cadd4f97f21f5919e",
            "provinceUid": "6b8d748d12ec4a87668b480f264f1e00ef64db28",
            "regionUid": "9bbc6efb8fffb5e28763fd08b248bbd23034e358",
            "postalCodeUid": "20cac6d85f2421faa57c83349b07bad5f9d0840a",
            "provinceNameNormalized": "laspalmas",
            "nameNormalized": "theharrowmaspalomassportbar-holidayworld",
            "links": {
                "tripAdvisorUrl": null,
                "googleUrl": "https://maps.google.es/?cid=11662803651031559422",
                "elTenedorUrl": null,
                "facebookUrl": null,
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf58",
            "restaurantUidentifier": "3329a6acc45aa3a76e4c2a4fdde93bcbab213cb8",
            "name": "BAR RESTAURANT GRIZZLY'S.",
            "streetAddress": "centro comercial biblos",
            "numberAddress": "1K",
            "provinceName": "Alicante",
            "regionName": "Comunitat Valenciana",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99749,
            "evidences": {
                "images": {
                    "total_images": 25,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c9426b",
                            "image_url": "https://imagevault.delectame.com/md5/7087d3e3cbfda4cb548eefbfbdc943bb",
                            "date": "2023-08-30",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9426c",
                            "image_url": "https://imagevault.delectame.com/md5/43e2877813a1f34863754d64d364e6d3",
                            "date": "2023-07-25",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9426d",
                            "image_url": "https://imagevault.delectame.com/md5/8b1a59b7ade1bc63f9fe3fb46dfe75ac",
                            "date": "2023-10-02",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9426e",
                            "image_url": "https://imagevault.delectame.com/md5/db215d360b50cf827a0e0734ddc1fddc",
                            "date": "2023-04-23",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9426f",
                            "image_url": "https://imagevault.delectame.com/md5/06e82fa9ee1559796981089e255f7e50",
                            "date": "2023-02-27",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94270",
                            "image_url": "https://imagevault.delectame.com/md5/b98a7111b101774d4f461f677b93340e",
                            "date": "2023-11-28",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94271",
                            "image_url": "https://imagevault.delectame.com/md5/5b4aa2497df6277758c1da1527862935",
                            "date": "2023-04-17",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94272",
                            "image_url": "https://imagevault.delectame.com/md5/76480b6e587c6224f9182acb089d2d3b",
                            "date": "2023-05-28",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94273",
                            "image_url": "https://imagevault.delectame.com/md5/6fc703ca1922f6fd879472adcae18733",
                            "date": "2023-09-14",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94274",
                            "image_url": "https://imagevault.delectame.com/md5/062ac71f232f304db431959579592e57",
                            "date": "2024-06-19",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94275",
                            "image_url": "https://imagevault.delectame.com/md5/75c2fd8a9b32e3b963f1760ca9fe6830",
                            "date": "2024-05-18",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94276",
                            "image_url": "https://imagevault.delectame.com/md5/4cccef1590b17a2e885f4f282b5076c2",
                            "date": "2023-09-09",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94277",
                            "image_url": "https://imagevault.delectame.com/md5/71aa042c487ced7d17d1127df6a55810",
                            "date": "2024-06-17",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94278",
                            "image_url": "https://imagevault.delectame.com/md5/7d9bf173c42b4616273bda84fcd90d03",
                            "date": "2024-06-16",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94279",
                            "image_url": "https://imagevault.delectame.com/md5/0ec370a7033b901f322365e0df430521",
                            "date": "2024-06-16",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9427a",
                            "image_url": "https://imagevault.delectame.com/md5/13ed5a13070c090ce64dfa0a9f956fa1",
                            "date": "2024-04-21",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9427b",
                            "image_url": "https://imagevault.delectame.com/md5/fb105c7ea76b3444d0ceb4056edb7755",
                            "date": "2024-04-21",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9427c",
                            "image_url": "https://imagevault.delectame.com/md5/c542f20d57b01d09539edf4634361aa2",
                            "date": "2023-03-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9427d",
                            "image_url": "https://imagevault.delectame.com/md5/c179624bb49cafce37978c450ac6d69a",
                            "date": "2024-06-13",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9427e",
                            "image_url": "https://imagevault.delectame.com/md5/17cea5d3f645c3f948e200a6cd4c7309",
                            "date": "2024-06-08",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9427f",
                            "image_url": "https://imagevault.delectame.com/md5/77dc27592b1825e3d4d60912d0047614",
                            "date": "2024-06-05",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94280",
                            "image_url": "https://imagevault.delectame.com/md5/d5c7d6a8acba60836c4cbaeb2bc49866",
                            "date": "2024-04-03",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94281",
                            "image_url": "https://imagevault.delectame.com/md5/a024b4c2119c474f95266a1ce2a08bf5",
                            "date": "2024-05-18",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94282",
                            "image_url": "https://imagevault.delectame.com/md5/c69500e8c3eca1debd98f98146d3b91d",
                            "date": "2024-05-18",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94283",
                            "image_url": "https://imagevault.delectame.com/md5/786a726786df7a3813a707d5825005ad",
                            "date": "2022-12-09",
                            "label": "tv"
                        }
                    ],
                    "soccer_images_count": 14,
                    "_id": "68646fe29b544de5c5c94284"
                },
                "comments": {
                    "total_comments": 1,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c94285",
                            "comment_text": "Large party so ordered a range of dishes off the menu. All of which was fair to mediocre quality and average value. Drinks service was good (although we did have things missing) but the food service was somewhat chaotic with things coming at different times (stopped food service half way through to bring a tray of drinks instead) and one of the kids meals (for a toddler) coming after most people had finished eating. Soggy chicken burgers but some of the beef burgers were nice.  A very very large menu so was probably pot luck which items to order for better quality. Ok for a beer with football showing and a quick nibble but wouldn’t go for dinner again.",
                            "date": "2023-08-27",
                            "label": "soccer_comment"
                        }
                    ],
                    "soccer_comments_count": 1,
                    "_id": "68646fe29b544de5c5c94286"
                },
                "tags": [
                    "ideal para ver deportes"
                ],
                "_id": "68646fe29b544de5c5c94287"
            },
            "cityUid": "81c9b3d49ef04008a6ae24ec50c788f8629887e1",
            "provinceUid": "c1c486e58d8b238ab1075e0a8bd1fd61f46c1254",
            "regionUid": "71dee81e4b525f876739781dcd1e612b46f0d9d3",
            "postalCodeUid": "050486d596fe47b6aac4d0fa7ad7559dda43d365",
            "provinceNameNormalized": "alicante",
            "nameNormalized": "barrestaurantgrizzly's.",
            "links": {
                "tripAdvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g187526-d8697277-Reviews-Bar_Grizzlys-Calpe_Costa_Blanca_Province_of_Alicante_Valencian_Community.html",
                "googleUrl": "https://maps.google.es/?cid=2276204876837581768",
                "elTenedorUrl": null,
                "facebookUrl": "https://www.facebook.com/grizzlyscalpe/",
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": "https://www.yelp.com/biz/grizzlys-calpe",
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        },
        {
            "_id": "66cc77685ba99d01c76edf59",
            "restaurantUidentifier": "211feb2a5a95e17f0f03496116daa8888b8af6e2",
            "name": "FrankFurt Pechu",
            "streetAddress": "n-, 69",
            "numberAddress": "340",
            "provinceName": "Barcelona",
            "regionName": "Cataluña",
            "status": "OPERATIONAL",
            "potential_ratio": 99.99731,
            "evidences": {
                "images": {
                    "total_images": 33,
                    "details": [
                        {
                            "_id": "68646fe29b544de5c5c94288",
                            "image_url": "https://imagevault.delectame.com/md5/58cf9317c4bc5a1931a65aa22da82558",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94289",
                            "image_url": "https://imagevault.delectame.com/md5/78e4c42d73b70d83a6bc4bfdf1680f9e",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9428a",
                            "image_url": "https://imagevault.delectame.com/md5/7efbdceadc69a147e00a741b182888e9",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9428b",
                            "image_url": "https://imagevault.delectame.com/md5/b333bf4ec844c1add719acb27d3c317a",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9428c",
                            "image_url": "https://imagevault.delectame.com/md5/4cf591d45f3777b5e5415a009f89f05d",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9428d",
                            "image_url": "https://imagevault.delectame.com/md5/26eb7f704780406fa1cea8ff0550b295",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9428e",
                            "image_url": "https://imagevault.delectame.com/md5/91657f4fc5890ab42c0f2197a3033ed4",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9428f",
                            "image_url": "https://imagevault.delectame.com/md5/5a0571fd2ed45bf633752d87653043f1",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94290",
                            "image_url": "https://imagevault.delectame.com/md5/c602cc4aa21a5d905878106f8a506bbd",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94291",
                            "image_url": "https://imagevault.delectame.com/md5/aa9fe53f3cecb8d6a598386aacf918c6",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94292",
                            "image_url": "https://imagevault.delectame.com/md5/6be119bc4b27c0d7b2cfaeded4457747",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94293",
                            "image_url": "https://imagevault.delectame.com/md5/00e2bc089b18792b81dc2c01076a1247",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94294",
                            "image_url": "https://imagevault.delectame.com/md5/873f8916441dd4405d00574d9db42836",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94295",
                            "image_url": "https://imagevault.delectame.com/md5/67c2258f2fc0f98d909934675e57e2ce",
                            "date": "2023-08-16",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94296",
                            "image_url": "https://imagevault.delectame.com/md5/04677dfb345c23df99641b30d39aa419",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94297",
                            "image_url": "https://imagevault.delectame.com/md5/c61e928f94a79c61091048b624681d23",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94298",
                            "image_url": "https://imagevault.delectame.com/md5/3aa2164e5b1bb7e5f2714f9e48b40a68",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c94299",
                            "image_url": "https://imagevault.delectame.com/md5/6cea208e3c2679cff2dbb0f97eaee4e7",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9429a",
                            "image_url": "https://imagevault.delectame.com/md5/3a2a46b1147a853d870bd929913e0246",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9429b",
                            "image_url": "https://imagevault.delectame.com/md5/ead840fabc42169b3de2b66a622a7604",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9429c",
                            "image_url": "https://imagevault.delectame.com/md5/a774bbff025a807a1836e07f9e62bc2c",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9429d",
                            "image_url": "https://imagevault.delectame.com/md5/b04b0cf3338fffd2670bed1990f18af4",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9429e",
                            "image_url": "https://imagevault.delectame.com/md5/60ba2e9755870e3f48c5c3dfe0e7b0a4",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c9429f",
                            "image_url": "https://imagevault.delectame.com/md5/efbcb17cb1417dd87bb91e2ba8219f1f",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c942a0",
                            "image_url": "https://imagevault.delectame.com/md5/dd8e73839ecaa107d3e41df3c1cb0fbc",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c942a1",
                            "image_url": "https://imagevault.delectame.com/md5/a63199ecfea769bc0267414f4b2ee15f",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c942a2",
                            "image_url": "https://imagevault.delectame.com/md5/2128d5eef1a2f056883abbd20f08d4b7",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c942a3",
                            "image_url": "https://imagevault.delectame.com/md5/ce067d40a3b3c291ccdd00d2d7a5a337",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c942a4",
                            "image_url": "https://imagevault.delectame.com/md5/ca9eac5d8612f3bc15599649337d4ed6",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c942a5",
                            "image_url": "https://imagevault.delectame.com/md5/50ec8bd039005fd80b07cf4c38769d05",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c942a6",
                            "image_url": "https://imagevault.delectame.com/md5/e58876d932e06a461e62ef62e357c323",
                            "date": "2023-08-20",
                            "label": "tv"
                        },
                        {
                            "_id": "68646fe29b544de5c5c942a7",
                            "image_url": "https://imagevault.delectame.com/md5/006efb7c6480dbc5e3bd0cba8f0febaf",
                            "date": "2023-08-20",
                            "label": "tv with soccer"
                        },
                        {
                            "_id": "68646fe29b544de5c5c942a8",
                            "image_url": "https://imagevault.delectame.com/md5/aeec9bae580f46f9e3dccc695a64850e",
                            "date": "2023-08-20",
                            "label": "tv"
                        }
                    ],
                    "soccer_images_count": 17,
                    "_id": "68646fe29b544de5c5c942a9"
                },
                "tags": [],
                "_id": "68646fe29b544de5c5c942aa"
            },
            "cityUid": "0206d083b5e3b9a54eb6e5c00bf621ad96329eed",
            "provinceUid": "8bd3f861205b44a6c3f397348f61a2eb53aaf0ca",
            "regionUid": "1f182abbec6f67fe89ddadca1f9424087f973b48",
            "postalCodeUid": "5ed70e6c0a0884627788d7987d0223f9ade47b5f",
            "provinceNameNormalized": "barcelona",
            "nameNormalized": "frankfurtpechu",
            "links": {
                "tripAdvisorUrl": null,
                "googleUrl": "https://maps.google.es/?cid=8459392759252257469",
                "elTenedorUrl": null,
                "facebookUrl": null,
                "twitterUrl": null,
                "instagramUrl": null,
                "michelinUrl": null,
                "yelpUrl": null,
                "glovoUrl": null,
                "justEatUrl": null,
                "uberEatsUrl": null,
                "guruUrl": null
            }
        }
    ],
    "total": 163852
    })
    // const params = this.dtAdapter.convertToDatatablesFormat(data);
    // return this.http.get<any>(`${this.API_URL}/restaurant?${params}`);
  }

  loadProvincesOptions(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/restaurant/provinces`);
  }

  loadEstablishmentData(uid: string): Observable<any> {
    return of({
    "_id": "66cc77685ba99d01c76eedcb",
    "restaurantUidentifier": "b1d882f046b98865133442c82e6ff3795a06b003",
    "name": "Bar San Remo",
    "streetAddress": "Calle guridi",
    "numberAddress": "10",
    "provinceName": "Alicante",
    "regionName": "Comunitat Valenciana",
    "status": "OPERATIONAL",
    "potential_ratio": 48.94024,
    "evidences": {
        "images": {
            "total_images": 1,
            "soccer_images_count": 1,
            "details": [
                {
                    "image_url": "https://imagevault.delectame.com/md5/5290c0d5b4494840de82582298e89bdc",
                    "date": "2022-12-03",
                    "label": "tv with soccer"
                }
            ]
        },
        "comments": {
            "total_comments": 1,
            "soccer_comments_count": 1,
            "details": [
                {
                    "comment_text": "Amazing Belgian beer bar in the sun, what more could you want? The beers are cheaper than in Belgium too! Lovely friendly owners. Big TV's show football. San Remo was recommended to me by Ernst and I wouldn't hesitate to recommend to others. If you're in San Luis head over!",
                    "date": "2023-09-10",
                    "label": "soccer_comment"
                }
            ]
        }
    },
    "cityUid": "b810d613404366cbbc56c86ddc1772cb6249a3ed",
    "provinceUid": "c1c486e58d8b238ab1075e0a8bd1fd61f46c1254",
    "regionUid": "71dee81e4b525f876739781dcd1e612b46f0d9d3",
    "postalCodeUid": "ddab039c20e5e15024d0229700b4a3f17d815d0c",
    "links": {
        "tripAdvisorUrl": "https://www.tripadvisor.com/Restaurant_Review-g187527-d11918615-Reviews-Bar_San_Remo-Torrevieja_Costa_Blanca_Province_of_Alicante_Valencian_Community.html",
        "googleUrl": "https://maps.google.es/?cid=1659818357479622670",
        "elTenedorUrl": null,
        "facebookUrl": "https://www.facebook.com/elchapparal/",
        "twitterUrl": null,
        "instagramUrl": null,
        "michelinUrl": null,
        "yelpUrl": null,
        "glovoUrl": null,
        "justEatUrl": null,
        "uberEatsUrl": null,
        "guruUrl": null
    }
})
    return this.http.get<any>(`${this.API_URL}/restaurant/${uid}`);
  }

  sendTracking(name: string, parameters: Record<string, any>): Observable<any> {
    parameters['name'] = name;
    return this.http.post<any>(`${this.API_URL}/tracking`, parameters);
  }
}
