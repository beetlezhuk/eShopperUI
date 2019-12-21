import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable()
// export class AuthRequestInterceptor implements HttpInterceptor {

//     constructor() {}

//     intercept(req: HttpRequest<any>, next: HttpHandler){
//         const newRequest = req.clone({headers: req.headers.append ('Authorization', 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.YN_TqRffYymvJ-hDHspvRzTPD38kg5W8RRBA2JpIducklD9GS8RUku6EwZStwigL5lIYgvDhHPq4FF8Ara3oaJSNewoXHRXHldD7OMLboZ7m47gr6wDNxU_Zya8b8eJbN2LRN_x8ZH9_6HlI4YCIOlYvI39t5tPrCj7B8aVgYSaK9VziM3-b1DDE485KlgFwE4vlnmWtC1eNdGvKQZQ0mFk8_2oufhHlXveSf4UhbQU4UR3VMO2pobw4B-OeaKfJeJcLXHymH41GxxrzA_XcubUZYStV-QksfJEK7d1Zu47Td8ehUqD6O8VP_0dUls5WbeL3lPW_al91n7gdNsYdBA.rsJ018dMotrN3tAWUkk6WQ.QbvLCDJ65BqdcqA7fxM_Qcmyx957hNk-pRb0FtOquabCi6AMvQbhEGKnVCj6OeMxSBRaoRRLYY6fK19dczBQjExU-1Wh4hPKwifdxrZ0rGYToDvpER686i6IhcLGSJystqy8XXyxgIeZwrooV7_gZumUMnJL-bNqgK6IsWsaahfyl8o3NB_QKiD4Jam8AgJNnOulq8O8OIVQBPCF3pPr9u1E3bEiHjMCK5E7RQbcAio_ngIaQCLOjSUTAPg8ctSJIl4BoZ1o8wfvv8bVN89P_CBDFBeZ98JAkzgw2Stg4lhd0JxEk0MRFBsk2vN7yOzM0WEOMA1uqyvzC0UvYio14H0whCX-gdeYroPaQupXwp2pKRQXSR87NY6s75WDUeqwmOqyrn7j3Dd4Ghdievyx-p09kKgKrZrFj7zv-MV6FbssFvr08st9p2-yIHjIOVbZL__imv0_RTJe3bVkXTwZLrQV5C1Drvhr-pGrNRFyhbMY1Vgvjs2_5ji06gUF6fPt4yZrxx9WRPvrCU8P-DSrXLUIFYahX230FfMTNT8Vmat9dix6r5ZZ_HAaq48fCwTBxzGrXM_Nyys52odUnILeYnVR7Hz1AQYbkZJIGbIigVo72Uzr64945o05lCC1wvmO.hzeCaw76cqU8ZmEdQOpfTg')});
//         console.log(newRequest.headers);
        
//         return next.handle(newRequest);
//     }

// }